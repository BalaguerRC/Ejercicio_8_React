import { SET_VISIBILITY } from "../actions/actions";

//initial values
let initialState = 'SHOW_ALL'

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY:
            return action.payload.filter;
        default:
            return state;
    }
}