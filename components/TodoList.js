import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'

class TodoList extends Component {
  render() {
    return (
      <ul className='todo-list'>
        { this.props.todos.map((todo) => {
          return <TodoItem
            key={ todo.text }
            text={todo.text }
            status={ todo.status }
            toggleTodo={ this.props.toggleTodo }
            deleteTodo={ this.props.deleteTodo } />
        }) }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: todo => dispatch(toggleTodo(todo)),
    deleteTodo: todo => dispatch(deleteTodo(todo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)