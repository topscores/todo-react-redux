import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <input className='new-todo' placeholder='What needs to be done?' />
    )
  }
}