import { useState } from "react";
import { useUserContext } from "./UserContext";

export default function AddUserForm () {
  const { addUser } = useUserContext();
  const [userName, setUserName] = useState("");

  function checkUserAndAdd () {
    if (userName.length === 0) {
      alert("⚠️ Type in the name to add a user")
    } else {
      addUser(userName);
      setUserName("");
    }
  }
  
  return (
    <>
      <form onSubmit={
        e => {
          e.preventDefault();
          checkUserAndAdd();
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