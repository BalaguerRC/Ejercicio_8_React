import {combineReducers} from "redux";
import {filterReducer} from "./filterReducer";
import {todosReducer} from "./todosReducer"

export const rootReducer=combineReducers(
    {
        todosState: todosReducer,
        filterState: filterReducer
        //add more state and recuers to include them in the store
    }
)