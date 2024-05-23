import { Outlet, NavLink } from "react-router-dom"
import Switch from "./Switch"
import { useThemeContext } from "../context/ThemeContext"; 
import "./Layout.css"

export default function Layout () {
    const { theme, setTheme } = useThemeContext()
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
                <Switch />
            </nav>
            <Outlet />
        </div>
    )



}