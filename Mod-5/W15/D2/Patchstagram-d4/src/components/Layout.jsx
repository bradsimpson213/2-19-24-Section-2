import { Outlet, NavLink, Navigate } from "react-router-dom"
import Switch from "./Switch"
import { useThemeContext } from "../context/ThemeContext";
import { useSelector, useDispatch } from "react-redux"; 
import "./Layout.css"
import { logoutUser } from "../store/usersReducer";


export default function Layout () {
    const sessionUser = useSelector( state => state.usersState.sessionUser)
    console.log("LOGGED IN USER",sessionUser)
    const dispatch = useDispatch()
    const { theme } = useThemeContext()


    return(
        <div>
            <nav className={`navbar-links-container ${theme}`}>
                <div className="navbar-subcontainer">
                    <img
                        className='navbar-logo'
                        src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png"
                        alt="cute-kitty-image"
                    />
                    <h2 className='navbar-title'>Patchstagram</h2>
                </div>
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/new">New Post</NavLink>
                {/* <a href="/new">New Post</a> */}
                <div>
                    { sessionUser
                        ? <span>Current user: {sessionUser.username}</span>
                        : <Navigate to="/" />
                    }
                </div>
                <button
                    onClick={ () => dispatch(logoutUser()) }
                >
                    Logout
                </button>
                <Switch />
            </nav>
            <Outlet />
        </div>
    )



}