import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import doomGuy from "./assets/doom_face.png"
import "./App.css"
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import UsersPage from "./UsersPage"

function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
