import "./Post.css"


export default function Post ({ data })  {
    console.log(data)
    const { id, title, author, image, date } = data

    return (
        <div className="post-container">
            <div className="post-header">
            <div className="user-info">
                <img
                    src={author.profile}
                    alt="user-profile"
                    className="profile-image"
                    />
                <h2>{ author.username }</h2>
            </div>
            <h3>{date.toDateString()}</h3>
            <h2>{ title }</h2>
        </div>

        </div>
    )
}

