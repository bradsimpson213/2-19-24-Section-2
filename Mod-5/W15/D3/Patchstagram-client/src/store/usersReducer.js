// import { users } from "../data"

const LOAD_USERS = "usersState/load_users"
const LOGIN_USER = "usersState/login_user"
const LOGOUT_USER = "usersState/logout_user"

// ACTION CREATORS
export const loadUsers = (users) => ({
    type: LOAD_USERS,
    users
})

export const loginUser = (user) => ({
    type: LOGIN_USER,
    user
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})


// THUNKS
export const getAllUsers = () => async (dispatch) => {
    const response = await fetch("/api/users/all")
    if (response.ok) {
        const { users } = await response.json()
        dispatch(loadUsers(users))
    } else {
        console.log("there was an error fetching users")
    }
}


// REDUCER
const initialState= { users: [], sessionUser: null }

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case LOAD_USERS:
            return { ...state, users: [...action.users] }
        case LOGIN_USER:
            return { ...state, sessionUser: action.user }
        case LOGOUT_USER:
            return { ...state, sessionUser: null }
        default:
            return state
    }
}

export default usersReducer