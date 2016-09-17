import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './components/TodoApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

const store = createStore(reducer, { newTodo: '', todos: [] })
const ReduxApp = <Provider store={store}><TodoApp /></Provider>
ReactDOM.render(ReduxApp, document.getElementById('react-root'))