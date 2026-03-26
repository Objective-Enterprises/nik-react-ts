import { useUserContext } from "./UserContext"
import UserListItem from "./UserListItem";

export default function UserList () {
  const contextValue = useUserContext();
  const listItems = contextValue.users.map((element, index) => {
    return (
      <UserListItem 
        key={index}
        element={element}
        index={index}
        variant="listItem"
      />
    )
  })
  return (
    <>
      <ul>
        {listItems}
      </ul>
    </>
  )
}