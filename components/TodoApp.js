import React, { Component } from 'react'
import style from '../assets/main.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: '',
      todos: []
    }
  }

  render() {
    return (
      <section className='todoapp'>
        <h1>todos</h1>
        <TodoInput />
        <TodoList />
      </section>
    )
  }
}
