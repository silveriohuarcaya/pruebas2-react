import React from 'react'
import Todo from './Todo'

const TodoList = ({ Tasks, onClick }) => {
  const handleTodo = (id) => {
    onClick(id)
  }
  return (
    <ul>
      {Tasks.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          text={todo.text}
          isCompleted={todo.isCompleted}
          onClick={handleTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
