import { useBugContext } from "./BugContext";

export default function RemoveBugButton (
  { indexToRemove }: { indexToRemove: number }
) {
  const contextValue = useBugContext();
  return (
    <button
        type="button"
        onClick={() => contextValue.removeBug(indexToRemove)}
        style={{ marginRight: "10px" }}
      >
        ➖ Remove
      </button>
  )
}