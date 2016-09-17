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
    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateNewTodo = this.updateNewTodo.bind(this)
  }
  addTodo(todo) {
    this.setState({
      todos: [
        ...this.state.todos,
        { text: todo, status: 'active' }
      ]
    })
  }
  deleteTodo(targetTodo) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        if (todo === targetTodo) {
          return false
        }
        return true
      })
    })
  }
  updateNewTodo(todo) {
    this.setState({
      newTodo: todo
    })
  }
  render() {
    return (
      <section className='todoapp'>
        <h1>todos</h1>
        <TodoInput
          newTodo={ this.state.newTodo }
          addTodo={ this.addTodo }
          updateNewTodo={ this.updateNewTodo } />
        <TodoList todos={ this.state.todos } deleteTodo={ this.deleteTodo } />
      </section>
    )
  }
}
