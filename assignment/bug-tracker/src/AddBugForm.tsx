import { useState } from "react";
import { useBugContext } from "./BugContext"


export default function AddBugForm () {
  const { addBug } = useBugContext();
  const [bugText, setBugText] = useState("")

  function checkBugAndAdd () {
    if (bugText.length === 0) {
      alert("⚠️ Type in some text to add a new bug")
    }
    else {
      addBug(bugText);
      setBugText("");
    }
  } 

  return (
    <form onSubmit={
      e => {
        e.preventDefault();
        checkBugAndAdd();
      }
    }>
      <input
        type="text"
        placeholder="bug details"
        onChange={e => setBugText(e.target.value)}
        value={bugText}
      />
      <button>
        ➕🐞 add bug
      </button>
    </form>
  )
}

