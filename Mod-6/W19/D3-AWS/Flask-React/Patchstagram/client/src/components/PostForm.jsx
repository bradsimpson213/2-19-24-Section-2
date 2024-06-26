import { useState, useEffect } from 'react'
// import someData from "../data"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { createNewPost } from "../store/postsReducer"


export default function PostForm () {
    const users = useSelector( state => state.usersState.users)
    // const posts = useSelector( state => state.postsState.posts)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [validationErrors, setValidationErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect( () => {
        const errors = {}
        if (!title.length) errors.title = "Please enter a post title!"
        if (!image) errors.image = "Please provide an image url!"
        setValidationErrors(errors)
      }, [title, image])


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(image, title, author)
        setHasSubmitted(true)

        if (Object.values(validationErrors).length) 
        return alert(`The following errors were found:
        ${validationErrors.title ? "* " + validationErrors.title : ""}
        ${validationErrors.image ? "* " + validationErrors.image : ""}
        `)

        const selectedUser = users.find( user => user.username === author)
        console.log(selectedUser)

        // const newPost = {
        //     id: posts.length + 1,
        //     title, 
        //     image, 
        //     author: selectedUser,
        //     date: new Date(),
        //     comments: [],
        //     likes: Math.floor(Math.random() + 10)
        // }
        // const newPost = {
        //     title, 
        //     image, 
        //     author: selectedUser.id,
        // }
        // console.log(newPost)

        const formData = new FormData()
        formData.append("caption", title)
        formData.append("image", image)
        formData.append("author", selectedUser.id)
        // someData.push(newPost)
        const response = await dispatch(createNewPost(formData))
        if (response === true) {
            setAuthor("")
            setTitle("")
            setImage("")
            navigate("/feed")
        } else {
            console.log('ERROR RESPONSE', error)
            setValidationErrors(response)
        }
    }


    return (
        <div className="feed-container">
            <h2>Create Post </h2>
            <form 
                onSubmit={ handleSubmit }
                encType="multipart/form-data"
            >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                        id="title"
                        type="text"
                        value={ title }
                        onChange={ function (e) {setTitle(e.target.value)}}
                        placeholder='Title'
                    />
                </div>
                <div style={{ color: "red"}}>
                    { hasSubmitted && validationErrors.title }
                </div>
                <div>
                    <label htmlFor="image">Image File:</label>
                    <input 
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={ (e) => setImage(e.target.files[0])}
                        placeholder='Image URL'
                    />
                </div>
                <div style={{ color: "red"}}>
                    { hasSubmitted && validationErrors.image }
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <select
                        name='author'
                        value={ author }
                        onChange={ (e) => setAuthor(e.target.value)}
                    >
                       <option value="" disabled > Select an author...</option>
                       { users.map( (user, index) => (
                            <option key={ index}>{ user.username }</option>
                       ))
                       } 
                    </select>
                    <button>Submit</button>
                </div>
            </form>
           
        </div>
    )
}