import { useUserContext } from "./UserContext"

export default function RemoveUser (
  { indexToRemove } : { indexToRemove: number }
) {
  const contexValue = useUserContext();
  return (
    <button
      type="button"
      onClick={() => contexValue.removeUser(indexToRemove)}
    >
      ➖ Remove user
    </button>
  )
}