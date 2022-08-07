import React, { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'

const todos = [
  {
    id: 1,
    text: 'Learn React',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false
  }
]
const App = () => {
  const [tasks, setTasks] = useState(todos)

  const handleTodoTasks = (Todo) => {
    /* Tambien mediante Destructuring
    setTasks([...tasks, Todo]) */

    setTasks(tasks.concat(Todo))
  }

  const handleTodoList = (id) => {
    const taskUpdate = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(taskUpdate)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoAdd todoTasks={handleTodoTasks} />
      <TodoList Tasks={tasks} onClick={handleTodoList} />
    </div>
  )
}

export default App

// ejemplo de Destructuring

const info = {
  title: 'once upon a time',
  protagonist: {
    name: 'Emma Swan',
    enemies: [
      { name: 'regina mills', title: 'evil queen' },
      { name: 'cora mills', title: 'queen of hearts' },
      { name: 'peter', title: 'queensdf of hearts' },
      { name: 'cosfra mills', title: 'queen ofsdf hearts' }
    ]
  }
}

const { title, protagonist } = info
const { name: protagonistname, enemies } = protagonist
const [, , peter] = enemies
const { name: nombres, title: titulos } = peter
console.log('silverio ', title, protagonistname, nombres, titulos)
