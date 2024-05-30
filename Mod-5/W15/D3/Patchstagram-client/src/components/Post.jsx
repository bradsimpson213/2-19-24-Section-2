import { useThemeContext } from "../context/ThemeContext"
import { Link } from "react-router-dom"
import "./Post.css"


export default function Post ({ data })  {
    const { id, title, User, image, createdAt } = data
    const { theme } = useThemeContext()

    return (
        <div className={`post-container ${theme}`}>
            <div className="post-header">
                <div className="user-info">
                    <img
                        src={User.profile}
                        alt="user-profile"
                        className="profile-image"
                        />
                    <h2>{ User.username }</h2>
                </div>
            <h3>{ createdAt.split("T")[0] }</h3>
        </div>
            <div className="post-body">
                <h2>{ title }</h2>
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

