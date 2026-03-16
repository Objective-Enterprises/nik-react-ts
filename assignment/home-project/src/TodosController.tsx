import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { TodoContext } from "./TodosControllerContext"

export default function TodosController () {
  const todos = ["Leon", "Ada"];
  return (
    <div
      style={{"marginBottom": "250px"}}
    >
      <TodoContext value={{ todos }}>
        <AddTodoForm/>
        <TodoList />
      </TodoContext>
    </div>
  )
}