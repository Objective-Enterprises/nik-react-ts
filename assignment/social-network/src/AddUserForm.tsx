import { useState } from "react";
import { useUserContext } from "./UserContext";

export default function AddUserForm () {
  const { addUser } = useUserContext();
  const [userName, setUserName] = useState("");
  const [userJob, setUserJob] = useState("");
  const [userBio, setUserBio] = useState("");

  function checkUserAndAdd () {
    if (userName.length === 0) {
      alert("⚠️ Type in the name to add a user")
    } else {
      addUser(
        userName,
        userJob,
        userBio
      );
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
        <div>
          <label
            htmlFor="userName"
          >
            Name
          </label>
          <input 
            name="userName"
            type="text" 
            placeholder="John Doe"
            onChange={e => setUserName(e.target.value)}
            value={userName}
          />
        </div>
        <div>
          <label
            htmlFor="userJob"
          >
            Job
          </label>
          <input 
            name="userJob"
            type="text" 
            placeholder="Cleaner"
            onChange={e => setUserJob(e.target.value)}
            value={userJob}
          />
        </div>
        <div>
          <label
            htmlFor="userBio"
          >
            Job
          </label>
          <textarea 
            name="userBio"
            placeholder="Born on Earth, died on Mars"
            onChange={e => setUserBio(e.target.value)}
            value={userBio}
          />
        </div>
        
        <button>
          ➕ add user
        </button>
      </form>
    </>
  )
}