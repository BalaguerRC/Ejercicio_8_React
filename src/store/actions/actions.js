//increment id for Todos

let nextTodoID=0

//actions
export const ADD_TODO='ADD_TODO';
export const TOGGLE_TODO='TOGGLE_TODO';
export const SET_VISIBILITY='SET_VISIBILITY';
/**
 * 
 * @param {string} text 
 * @returns 
 */
export const addTodo=(text)=>{
    return{
        type: ADD_TODO,
        payload: {
            id:nextTodoID++,
            text
        }
    }
}

export const toggleTodo=(id)=>{
    return{
        type:TOGGLE_TODO,
        payload:{
            id
        }
    }
}

export const setVisibility=(filter)=>{
    return{
        type:SET_VISIBILITY,
        payload:{
            filter
        }
    }
}