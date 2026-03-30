import AddUserForm from "./AddUserForm";
import UserList from "./UserList";

export default function UsersPage () {
  return (
    <>
      <h2>Users</h2>
      <AddUserForm />
      <UserList />
    </>
  )
}