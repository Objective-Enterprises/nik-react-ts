import { type Bug } from "./BugContext"
import RemoveBugButton from "./RemoveBugButton";
import ToggleActiveButton from "./ToggleActiveButton";

interface BugItemProps {
  element: Bug
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
      <ToggleActiveButton
        element={element}
        indexToToggle={index}
      />
      <span
        style={{ color: element.active ? "red" : "rgb(192, 192, 192)" }}
      >
        {element.text}
      </span>
    </li>
  )
}