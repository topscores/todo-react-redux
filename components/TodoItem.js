import React, { Component } from 'react'

export default class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.toggleClickHandler = this.toggleClickHandler.bind(this)
    this.deleteClickHandler = this.deleteClickHandler.bind(this)
  }
  toggleClickHandler(e) {
    this.props.toggleTodo(this.props.text)
  }
  deleteClickHandler(e) {
    this.props.deleteTodo(this.props.text)
  }
  render() {
    return (
      <li className={ this.props.status==='active'?'':'completed' }>
        <input
          className='toggle'
          type='checkbox'
          onClick={ this.toggleClickHandler } />
        <label>{ this.props.text }</label>
        <button
          className='destroy'
          onClick={ this.deleteClickHandler } />
      </li>
    )
  }
}