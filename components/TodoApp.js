import React, { Component } from 'react'
import style from '../assets/main.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  addTodo(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: todo, status: 'active' }
      ]
    })
  }
  render() {
    return (
      <section className='todoapp'>
        <h1>todos</h1>
        <TodoInput todos={this.state.todos} />
        <TodoList todos={this.state.todos} />
      </section>
    )
  }
}
