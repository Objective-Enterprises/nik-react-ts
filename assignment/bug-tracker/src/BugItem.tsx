import { type Bug } from "./BugContext";
import BugDetails from "./BugDetails";

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
      <BugDetails
        element={element}
        index={index}
      />
    </li>
  )
}