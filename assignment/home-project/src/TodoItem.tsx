import { useTodoContext } from "./TodoContext"

interface TodoItemProps {
  element: string
  index: number
}

export default function TodoItem ({
  element,
  index
}: TodoItemProps) {
  const contextValue = useTodoContext();
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