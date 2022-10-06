
import {combineReducers} from "redux";
import movieReducer from "./reducers/movieReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer
})

export default rootReducer;