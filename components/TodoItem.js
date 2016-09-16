import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <li className={ this.props.status==='active'?'':'completed' }>
        <input className='toggle' type='checkbox' />
        <label>{this.props.text}</label>
        <button className='destroy'></button>
      </li>
    )
  }
}