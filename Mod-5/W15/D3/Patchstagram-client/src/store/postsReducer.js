
const GET_POSTS = "postsState/get_posts"
const CREATE_POST = 'postsState/create_post'

// ACTION CREATORS
export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
})

export const createPost = (post) => ({
    type: CREATE_POST,
    post
})


// THUNKS
export const getAllPosts = () => async (dispatch) => {
    const response = await fetch("/api/posts/all")

    if (response.ok) {
        const { posts } = await response.json()
        console.log("GAP Response", posts)
        dispatch(getPosts(posts))
    } else {
        const error = await response.json()
        console.log("GAP ERROR", error)
    }
}

export const createNewPost = (post) => async (dispatch) => {
    const response = await fetch("/api/posts/new",{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const { resPost } = await response.json()
        console.log("CP Response", resPost)
        dispatch(createPost(resPost))
        return true
    } else {
        const error = await response.json()
        console.log("CP ERROR", error)
        return error
    }
}

// REDUCER
const initialState = { posts: [] }

const postsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return { ...state, posts: [...action.posts]}
        case CREATE_POST:
            return { ...state, posts: [...state.posts, action.post] }
        default:
            return state
    }


}


export default postsReducer