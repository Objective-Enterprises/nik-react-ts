import { useContext, useState } from "react"
import { TodoContext } from "./TodosControllerContext"

export default function AddTodoForm () {
  const contextValue = useContext(TodoContext);
  if (!contextValue) {
    throw new Error("💥 AddTodoForm can't access the context");
  }
  const addTodo = contextValue.addTodo;
  const [todoText, setTodoText] = useState("");
  function checkTodoAndAdd() {
    if (todoText.length === 0) {
      alert("⚠️ Type in some text to add a new task")
    }
    else {
      addTodo(todoText);
      setTodoText("");
    }
  }
 
  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        checkTodoAndAdd()
      }
    }>
      <input 
        type="text" 
        placeholder="describe a task"
        onChange={e => setTodoText(e.target.value)}
        value={todoText}
      />
      <button type="submit">
        ➕ add TODO
      </button>
    </form>
  )
}