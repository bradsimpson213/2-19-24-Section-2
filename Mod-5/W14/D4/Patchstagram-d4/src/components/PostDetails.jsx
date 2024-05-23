import { useParams, Link } from "react-router-dom"

export default function PostDetails({ data }) {
    const { postId } = useParams()
    console.log(postId)
    const postData = data.find(post => post.id === +postId)

    return (
        <div>
            <Link to="/feed">Back to feed...</Link>
            <p>{postData.title}</p>
            <p> by: {postData.author.username} </p>
            <img src={postData.image} style={{ height: "300px" }} />
            <span>Likes:</span><span>{postData.likes}</span>

        </div>
    )
}


