import Post from "./Post"
// import { usePostsContext } from "../context/PostsContext"
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../store/postsReducer";
import { useEffect } from "react";
import seedPosts from "../data"
import "./Feed.css"


export default function Feed () {
    // const { posts } = usePostsContext()
    const posts = useSelector( state => state.postsState.posts)
    const dispatch = useDispatch()


    useEffect( () => {
        dispatch(getPosts(seedPosts))
    }, [])

    const compare = (a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) === new Date(b.date)) return 0;
    };
    const sortedFeed = posts.sort(compare)

    return(
        <div className="feed-container">
            { sortedFeed.map(post => (
                <Post data={post} key={post.id} />
              ))}
        </div>
    )
}