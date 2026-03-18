import { useContext } from "react"
import { TodoContext } from "./TodosControllerContext"

interface TodoItemProps {
  element: string
  index: number
}

export default function TodoItem ({
  element,
  index
}: TodoItemProps) {
  const contextValue = useContext(TodoContext);
  if (!contextValue) {
    throw new Error("💥 TodoItem can't access the context");
  }
  return (
    <li>
      <button
        type="button"
        onClick={() => contextValue.removeTodo(index)}
        style={{ marginRight: "10px" }}
      >
        ➖ Remove
      </button>
      <span>{element}</span>
    </li>
  )
}