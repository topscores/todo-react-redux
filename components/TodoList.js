import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const todos = [
      { text: 'buy coffee', status: 'active'},
      { text: 'read book', status: 'done'},
    ]
    return (
      <ul className='todo-list'>
        { todos.map((todo) => {
          return <TodoItem key={todo.text} text={todo.text} status={todo.status} />
        }) }
      </ul>
    )
  }
}