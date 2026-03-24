import { useState } from "react";

export default function AddUserForm () {
  const [userName, setUserName] = useState("");
  function addUser (userName: string) {
    
  }
  return (
    <>
      <form onSubmit={
        e => {
          e.preventDefault();
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