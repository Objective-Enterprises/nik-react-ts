import { useState } from "react";
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { TodoContext } from "./TodoContext"

export default function TodosController () {
  const [todos, setTodos] = useState<string[]>([])

  function addTodo(todoText: string) {
    const newTodos = [...todos, todoText];
    setTodos(newTodos);
  }

  function removeTodo(indexToRemove: number) {
    const newTodos = todos.filter((_item, index) => {
      return index !== indexToRemove;
    })
    setTodos(newTodos)
  }
  return (
    <div
      style={{
        width: "450px"
      }}
    >
      <h2>TODO tracker</h2>
      <TodoContext value={{ 
        todos, 
        removeTodo,
        addTodo 
      }}>
        <AddTodoForm/>
        <TodoList />
      </TodoContext>
    </div>
  )
}