import "./Post.css"


export default function Post ({ data })  {
    console.log(data)
    const { id, title, author, image, date } = data

    const newInfo = [1, 2, 3]
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
        </div>
        <div className="post-body">
            <h2>{ title }</h2>
            <img 
                src={ image } 
                alt="main-post-iamge"
                className="content-image" 
            />
        </div>
        </div>
    )
}

