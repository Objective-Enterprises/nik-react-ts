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
      <button>
      </button>
      <span>{element}</span>
    </li>
  )
}