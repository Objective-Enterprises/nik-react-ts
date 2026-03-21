import { useTodoContext, type Todo } from "./TodoContext"

interface TodoItemProps {
  element: Todo
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
      <span
        style={{ textDecoration: element.done ? "line-through" : "none" }}
      >
        {element.text}
      </span>
      <button
        type="button"
        onClick={() => contextValue.updateTodo(index)}
        style={{ marginLeft: "10px" }}
      >
        Done/Undone
      </button>
    </li>
  )
}