import { Outlet, NavLink } from "react-router-dom"


export default function Layout () {

    return(
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/new">New Post</NavLink>
            </nav>
            <Outlet />
        </>
    )



}