import { ADD_USER_TO_STATE, REMOVE_USER_FROM_STATE } from "../actions/userActions";

const initialState = {}

export default function userReducer(state=initialState, {type, payload}){
    switch (type) {
        case ADD_USER_TO_STATE:
            return {
                ...state, payload
            }
        
        case REMOVE_USER_FROM_STATE:
            return{

            }
    
        default:
            return state;
    }
}