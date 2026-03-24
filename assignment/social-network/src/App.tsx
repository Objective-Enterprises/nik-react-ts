import Home from "./Home"
import doomGuy from "./assets/doom_face.png"


function App() {

  return (
    <>
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
      <Home></Home>
    </>
  )
}

export default App
