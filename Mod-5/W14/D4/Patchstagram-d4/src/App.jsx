import Post from "./components/Post"
import PurpleWrapper from "./components/PurpleWrapper"
import Landing from "./components/Landing"
import Feed from "./components/Feed"
import Layout from "./components/Layout"
import PostForm from "./components/PostForm"
import PostDetails from "./components/PostDetails"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import './App.css'
import someData from "./data"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    element: <Layout />,
    children:[
      {
        path: 'feed',
        element: <Feed />
      },
      {
        path: 'feed/:postId',
        element: <PostDetails data={ someData }/>
      },
      {
        path: 'new',
        element: <PostForm />
      },
    ]
  }
]
)


function App() {
  console.log("Hi there!")


  return (
    <div >
      {/* <Link to="/feed">Feed</Link> */}
      <RouterProvider router={ router } />
      {/* <h1>Hi there!</h1>
      <h2>Welcome to Patchstagram!</h2>
      <img
        src="https://res.cloudinary.com/app-academy4/image/upload/v1651083196/Patchstagram/IMG_3650_d2srwy.jpg"
        alt="Cat image"
        style={{ height: "300px" }}
      /> */}
      {/* <img
        src={ viteLogo }
      /> */}
      {/* <Post data={someData[0]}/>
      <PurpleWrapper>
        <Post data={someData[1]}/>
      </PurpleWrapper>      
      <Post data={someData[2]}/>
      <PurpleWrapper>
       <Post data={someData[3]}/>
      </PurpleWrapper> */}
      {/* {someData.map(post => (
        <Post data={post} key={post.id} />
      ))} */}
    </div>
  )
}

export default App
