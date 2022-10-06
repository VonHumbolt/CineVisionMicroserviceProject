export const ADD_USER_TO_STATE = "ADD_USER_TO_STATE";
export const REMOVE_USER_FROM_STATE = "REMOVE_USER_FROM_STATE";

export function addUserToState(userDto) {
    return {
        type: ADD_USER_TO_STATE,
        payload: userDto
    }
}

export function removeUserFromState() {
    return {
        type: REMOVE_USER_FROM_STATE
    }
}