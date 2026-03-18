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
  if (contextValue) {
    return (
      <li>
        <span>{element}</span>
        <button
          type="button"
          onClick={() => contextValue.removeTodo(index)}
        >
          ➖ Remove
        </button>
      </li>
    )
  }
}