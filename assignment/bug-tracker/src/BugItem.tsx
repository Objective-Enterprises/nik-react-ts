import { useBugContext } from "./BugContext"
import RemoveBugButton from "./RemoveBugButton";

interface BugItemProps {
  element: string
  index: number
}

export default function BugItem ({
  element,
  index
}: BugItemProps) {
  return (
    <li>
      <RemoveBugButton 
        indexToRemove={index}
      />
      <span>{element}</span>
    </li>
  )
}