import { DELETE_DATA, FETCH_DATA, POST_DATA, PUT_DATA } from "../actions/actions"

export const initialState = {
    profile: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return{
                ...state,
                profile: action.payload
            }
        case POST_DATA:
            return{
                ...state,
                profile: action.payload
            }
        case PUT_DATA:
            return{
                ...state,
                profile: state.profile.map(item => item.id === action.payload.id ? action.payload : item)
            }
        case DELETE_DATA:
            return{
                ...state,
                profile: state.profile.map(item => item.id === action.payload.id ? action.payload : item)
            }
        default:
            return state;
    }
}