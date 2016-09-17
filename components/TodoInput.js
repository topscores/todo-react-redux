import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleChange(e) {
    this.props.updateNewTodo(e.target.value)
  }
  handleKeyDown(e) {
    // If not enter key
    if (e.keyCode !== 13) {
      return
    }
    e.preventDefault()
    this.props.addTodo(e.target.value)
    this.props.updateNewTodo('')
  }
  render() {
    return (
      <input
        className='new-todo'
        value={ this.props.newTodo }
        placeholder='What needs to be done?'
        onChange={ this.handleChange }
        onKeyDown={ this.handleKeyDown } />
    )
  }
}