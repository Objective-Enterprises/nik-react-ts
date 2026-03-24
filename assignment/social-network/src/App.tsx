import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import doomGuy from "./assets/doom_face.png"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import "./App.css"

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
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
