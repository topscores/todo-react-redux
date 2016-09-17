import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
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