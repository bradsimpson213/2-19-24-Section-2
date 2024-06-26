import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { loginUser, getAllUsers } from "../store/usersReducer"
import "./Landing.css"


export default function Landing () {
    const [ currentUser, setCurrentUser ] = useState('')
    const users = useSelector( state => state.usersState.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect( () => {
       dispatch(getAllUsers())
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const selectedUser = users.find( user => user.username === currentUser)
        dispatch(loginUser(selectedUser))
        setCurrentUser("")
        navigate("/feed")
    }

    return(
        <div className="landing-container">
            <h1 className="landing-title">Welcome to Patchstagram!</h1>
            <img 
                style={
                    { height: "300px" }
                } 
                src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" 
                alt="cute-kitty-image"
            />
            <p className="landing-subtitle">The cat with so much to talk about, he needs his own social media site!</p>
            {/* <Link to="/feed">Feed</Link> */}
            <form onSubmit={ handleSubmit }>
                <div>
                    <label
                        htmlFor="currentUser"
                    >
                        User to login:
                    </label>
                    <select
                        name="currentUser"
                        onChange={ (e) => setCurrentUser(e.target.value) }
                        value={ currentUser }
                    >
                        <option
                            value=''
                            disabled
                        >
                            Select a user...
                        </option>
                        { users.map( (user, index) => (
                            <option key={ index }>
                                { user.username}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    className="landing-button"

                >
                    Login
                </button>
            </form>
        </div>
    )
}