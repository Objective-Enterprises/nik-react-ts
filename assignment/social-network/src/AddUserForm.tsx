import { useState } from "react";

export default function AddUserForm () {
  const [userName, setUserName] = useState("");
  const [users, setUsers] = useState([""]);
  function addUser (userName: string) {
    const newUsers = [...users, userName];
    setUsers(newUsers);
    setUserName("");
  }
  return (
    <>
      <form onSubmit={
        e => {
          e.preventDefault();
          addUser(userName);
        }
      }>
        <input 
          type="text" 
          placeholder="John Doe"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
        <button>
          ➕ add user
        </button>
      </form>
    </>
  )
}