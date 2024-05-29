
const GET_POSTS = "postsState/get_posts"


export const getPosts = (posts) => ({
    type: GET_POSTS,
    posts
})


const initialState = { posts: [] }


const postsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return { ...state, posts: [...action.posts]}
        default:
            return state
    }


}


export default postsReducer