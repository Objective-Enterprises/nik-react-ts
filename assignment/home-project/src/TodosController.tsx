import { useState } from "react";
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { TodoContext, type Todo } from "./TodoContext"

export default function TodosController () {
  const [todos, setTodos] = useState<Todo[]>([])

  function addTodo(todoText: string) {
    const newTodos = [...todos, { text: todoText, done: false }];
    setTodos(newTodos);
  }

  function removeTodo(indexToRemove: number) {
    const newTodos = todos.filter((_item, index) => {
      return index !== indexToRemove;
    })
    setTodos(newTodos)
  }

  function updateTodo(indexToUpdate: number) {
    const newTodos = todos.map((item, index) => {
      if (indexToUpdate !== index) {
        return item
      }
      const updatedTodo = {...item, done: !item.done};
      return updatedTodo
    })

    setTodos(newTodos);
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
        addTodo,
        updateTodo
      }}>
        <AddTodoForm/>
        <TodoList />
      </TodoContext>
    </div>
  )
}