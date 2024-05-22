import { useState, useEffect } from 'react'



export default function PostForm () {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")

    useEffect( () => {
    
    }, [title])


    return (
        <div>
            <h1> This will be our post form space</h1>
            <button onCLick={ (e) => setTitle(e.target.value)}>Click Me</button>
        </div>
    )
}