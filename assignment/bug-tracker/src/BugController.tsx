import { useState } from "react";
import AddBugForm from "./AddBugForm";
import { BugContext } from "./BugContext";
import BugList from "./BugList";

export default function BugController () {
  const [bugs, setBugs] = useState<string[]>([])

  function addBug (bugText: string) {
    const newBugs = [...bugs, bugText];
    setBugs(newBugs);
  }

  return (
    <div>
      <BugContext value={{
        bugs,
        addBug
      }}>
        <AddBugForm />
        <BugList />
      </BugContext>
    </div>
  )
}