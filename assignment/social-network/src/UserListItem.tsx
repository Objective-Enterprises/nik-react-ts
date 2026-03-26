import RemoveUser from "./RemoveUser"
import UserDetails, { type UserDetailsProps } from "./UserDetails"

export default function UserListItem ({
  element,
  index
}: UserDetailsProps) {
  return (
    <li>
      <UserDetails 
        element={element}
        index={index}
        variant="listItem"
      />
      <RemoveUser 
        indexToRemove={index}
      />
    </li>
  )
}