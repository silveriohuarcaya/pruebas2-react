import React from 'react'

const Todo = ({ id, text, isCompleted, onClick }) => {
  const handleClick = () => {
    onClick(id)
  }
  const handleEliminar = () => {
    onClick(id)
  }
  return (
    <li>
      <span>{text}</span>
      <button type="button" onClick={handleClick}>
        {isCompleted ? 'v' : 'x'}
      </button>
      <button type="button" onClick={handleEliminar}>
        Eliminar
      </button>
    </li>
  )
}

export default Todo
