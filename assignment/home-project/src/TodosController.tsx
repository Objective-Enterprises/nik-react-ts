import { useState } from "react";
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { TodoContext } from "./TodosControllerContext"

export default function TodosController () {
  const [todos, setTodos] = useState<string[]>(["Leon", "Ada"])
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
      <TodoContext value={{ todos: todos, removeTodo: removeTodo }}>
        <AddTodoForm/>
        <TodoList />
      </TodoContext>
    </div>
  )
}