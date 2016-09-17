export default (state, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return {
        newTodo: state.newTodo,
        todos: [
          ...state.todos,
          { text: action.payload, status: 'active' },
        ]
      }
    case 'UPDATE_NEW_TODO':
      return {
        newTodo: action.payload,
        todos: state.todos
      }
    case 'TOGGLE_TODO':
      return {
        newTodo: state.newTodo,
        todos: state.todos.map((todo) => {
          if (todo.text === action.payload) {
            return { text: todo.text, status: (todo.status === 'active')?'done':'active' }
          }
          return todo
        })
      }
    case 'DELETE_TODO':
      return {
        newTodo: state.newTodo,
        todos: state.todos.filter((todo) => {
          if (todo.text === action.payload) {
            return false
          }
          return true
        })
      }
    default:
      return state
  }
}