//import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions'
import Todoform from '../pure/TodoForm'

/*export const TodoFormContainer = (props) => {
  return (
    <div>TodoFormContainer</div>
  )
}*/

const mapStateToProps = (state) => ({})

const mapDispatchToProps =(dispatch)=> {
    return {
        submit: (text)=>{
            dispatch(addTodo(text))
        }
    }
}

const TodoFormContainer= connect(mapStateToProps, mapDispatchToProps)(Todoform)

export default TodoFormContainer;