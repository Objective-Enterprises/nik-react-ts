import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import doomGuy from "./assets/doom_face.png"
import Home from "./Home"
import About from "./About"

function App() {

  return (
    <BrowserRouter>
      <img 
        src={doomGuy} alt="the Doom Guy face with yellow eyes" 
        width="25 rem"
        style={{display: "inline-block"}}
      />
      <h1 
        style={{
          display: "inline-block",
          color: "#7a0000"
        }}
      >
        FRIENDS IN DOOM
      </h1>
      <img 
        src={doomGuy} alt="the Doom Guy face with yellow eyes" 
        width="25 rem"
        style={{display: "inline-block"}}
      />
      <div>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
