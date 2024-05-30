
const GET_POSTS = "postsState/get_posts"
const CREATE_POST = 'postsState/create_post'


export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
})

export const createPost = (post) => ({
    type: CREATE_POST,
    post
})


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