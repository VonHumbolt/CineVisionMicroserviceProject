
import {combineReducers} from "redux";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers({
    movie: movieReducer
})

export default rootReducer;