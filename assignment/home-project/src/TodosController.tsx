import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { TodoContext } from "./TodosControllerContext"

export default function TodosController () {

  return (
    <div
      style={{"marginBottom": "250px"}}
    >
      <TodoContext value={undefined}>
        <AddTodoForm/>
        <TodoList />
      </TodoContext>
    </div>
  )
}