import RemoveUser from "./RemoveUser"
import type { User } from "./UserContext"
import UserDetails from "./UserDetails"

interface UserListItemDetails {
  element: User
  index: number
}
export default function UserListItem ({
  element,
  index
}: UserListItemDetails) {
  return (
    <li>
      <UserDetails 
        element={element}
        index={index}
      />
      <RemoveUser 
        indexToRemove={index}
      />
    </li>
  )
}