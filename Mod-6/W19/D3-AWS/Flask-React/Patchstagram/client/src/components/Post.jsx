import { useThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"
import "./Post.css"


export default function Post ({ data })  {
    const { id, caption, user, image, postDate } = data
    const { theme } = useThemeContext()

    return (
        <div className={`post-container ${theme}`}>
            <div className="post-header">
                <div className="user-info">
                    <img
                        src={user.profilePic}
                        alt="user-profile"
                        className="profile-image"
                        />
                    <h2>{ user.username }</h2>
                </div>
            <h3>{ postDate }</h3>
        </div>
            <div className="post-body">
                <h2>{ caption }</h2>
                <img 
                    src={ image } 
                    alt="main-post-iamge"
                    className="content-image" 
                />
            </div>
            <Link to={`/feed/${id}`}>To post details</Link>
        </div>
    )
}

