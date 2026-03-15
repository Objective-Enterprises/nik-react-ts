import { useState } from "react"

export default function AddTodoForm (addTodo) {
  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        addTodo()
      }
    }>
      <input 
        type="text" 
        placeholder="describe a task"
      />
      <button type="button">
        ➕ add TODO
      </button>
    </form>
  )
}