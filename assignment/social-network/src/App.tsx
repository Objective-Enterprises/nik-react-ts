import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import doomGuy from "./assets/doom_face.png"
import "./App.css"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import UsersPage from "./UsersPage"
import UserPage from "./UserPage"
import { UserContext, type User } from "./UserContext"
import { useState } from "react"

function App() {
  const [users, setUsers] = useState<User[]>([]);

  function addUser (
    userName: string,
    userJob: string,
    userBio?: string
  ) {
    const newUsers = [...users, { 
      userName: userName, 
      job: userJob, 
      bio: userBio ?? "unknown" // ?? only checks if the value is NOT undefined or NOT null.
    }];
    setUsers(newUsers);
  }

  function removeUser (indexToRemove: number) {
    const newUsers = users.filter((_element, index) => {
      return index !== indexToRemove;
    })
    setUsers(newUsers);
  }

  function updateUser(
    indexToUpdate: number,
    updatedFields: User
  ) {
    const newUsers = users.map((user, index) => {
      if (indexToUpdate === index) {
        return {
          ...user,
          ...updatedFields
        }
      }
      return user;
    })
    setUsers(newUsers);
  }
  
  return (
    <BrowserRouter>
      <UserContext value={{
        users,
        addUser,
        removeUser,
        updateUser
      }}>
        <img 
          src={doomGuy} alt="the Doom Guy face with yellow eyes" 
          width="25 rem"
        />
        <h1 className="titleHeader">
          FRIENDS IN DOOM
        </h1>
        <img 
          src={doomGuy} alt="the Doom Guy face with yellow eyes" 
          width="25 rem"
        />
        <div>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/users">Users</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:index" element={<UserPage />} />
        </Routes>
      </UserContext>
    </BrowserRouter>
  )
}

export default App
