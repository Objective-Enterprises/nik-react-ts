import { useBugContext } from "./BugContext"

interface BugItemProps {
  element: string
  index: number
}

export default function BugItem ({
  element,
  index
}: BugItemProps) {
  const contextValue = useBugContext();

  return (
    <li>
      <button
        type="button"
        onClick={() => contextValue.removeBug(index)}
        style={{ marginRight: "10px" }}
      >
        ➖ Remove
      </button>
      <span>{element}</span>
    </li>
  )
}