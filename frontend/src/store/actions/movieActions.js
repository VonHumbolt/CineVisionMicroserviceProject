export const ADD_MOVIE_TO_STATE = "ADD_MOVIE_TO_STATE";
export const CLEAN_STATE = "CLEAN_STATE";

export function addMovieToState(movie) {
    return {
        type: ADD_MOVIE_TO_STATE,
        payload: movie
    }
}

export function cleanState() {
    return {
        type: CLEAN_STATE,
    }
}