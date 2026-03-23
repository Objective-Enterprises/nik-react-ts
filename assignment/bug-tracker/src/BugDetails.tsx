import { Link } from "react-router-dom";
import { type Bug } from "./BugContext";
import RemoveBugButton from "./RemoveBugButton";
import ToggleActiveButton from "./ToggleActiveButton";

interface BugDetailsProps {
  element: Bug
  index: number
}

export default function BugDetails({
  element,
  index
}: BugDetailsProps) {
  const path = `/bug/${index}`
  return (
    <>
      <RemoveBugButton
        indexToRemove={index}
      />
      <ToggleActiveButton
        element={element}
        indexToToggle={index}
      />
      <Link
        to={path}
        style={{ color: element.active ? "red" : "rgb(192, 192, 192)" }}
      >
        {element.text}
      </Link>
    </>
  )
}