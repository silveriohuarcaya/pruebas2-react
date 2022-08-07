import React, { useState } from 'react'

const TodoAdd = ({ todoTasks }) => {
  const [value, setValue] = useState('')

  const handleOnChange = (event) => {
    setValue(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const Todo = {
      id: Date.now(),
      text: value,
      isCompleted: false
    }
    todoTasks(Todo)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleOnChange} />
      <button type="submit">Add</button>
    </form>
  )
}
export default TodoAdd
