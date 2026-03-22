import { useBugContext, type Bug } from "./BugContext";

interface ToggleActiveButtonProps {
  element: Bug
  indexToToggle: number
}
export default function ToggleActiveButton ({
  element,
  indexToToggle
}: ToggleActiveButtonProps) {
  const contextValue = useBugContext();
  return (
    <button
        type="button"
        onClick={() => contextValue.toggleBug(indexToToggle)}
        style={{ marginRight: "10px" }}
      >
        {element.active ? (
          <>
            <b>Active</b>/Dormant
          </>
        ) : (
          <>
            Active/<b>Dormant</b>
          </>
        )}
        {/* Active/Dormant */}
      </button>
  )
}