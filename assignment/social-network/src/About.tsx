
import doomFriends from "./assets/doom_friends.gif"

export default function About () {
  return (
    <>
      <h2>ABOUT</h2>
      <img 
        src={doomFriends} alt="four people in a moving car with an open cabin. They are all dancing, and their heads are replaced with the sprites of Doom Guy from the game Doom" 
        style={{ margin: "30px 0px"}}
      />
      <p>
        The best parties are here.
        The prolific discussions are not.
      </p>
      <p>
        The sense of community... you're still there? 
      </p>
    </>
  )
}