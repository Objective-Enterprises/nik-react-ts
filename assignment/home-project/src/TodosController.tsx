import { useState } from "react";
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { TodoContext } from "./TodosControllerContext"

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
      style={{"marginBottom": "250px"}}
    >
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