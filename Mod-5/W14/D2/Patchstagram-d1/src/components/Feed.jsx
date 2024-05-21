import Post from "./Post"



export default function Feed ({ data }) {

    return(
        <div>
            { data.map(post => (
                <Post data={post} key={post.id} />
              ))}
        </div>
    )
}