import { useParams } from "react-router-dom"
import { useUserContext } from "./UserContext";
import UserDetails from "./UserDetails";

export default function UserPage () {
  const params = useParams()
  if (!params.index) {
    throw new Error("index is required");
  }
  const index = Number(params.index);
  const userContext = useUserContext();
  const element = userContext.users[index];
  if (!element) {
    return <p>User not found</p>
  }
  return (
    <UserDetails 
      element={element}
      index={index}
      variant="userPage"
    />
  )
}