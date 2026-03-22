import { useState } from "react";
import AddBugForm from "./AddBugForm";
import { BugContext, type Bug } from "./BugContext";
import BugList from "./BugList";

export default function BugController () {
  const [bugs, setBugs] = useState<Bug[]>([])

  function addBug (bugText: string) {
    const newBugs = [...bugs, { text: bugText, active: false }];
    setBugs(newBugs);
  }

  function removeBug (indexToRemove: number) {
    const newBugs = bugs.filter((_item, index) => {
      return index !== indexToRemove;
    })
    setBugs(newBugs)
  }

  function toggleBug (indexToToggle: number) {
    const newBugs = bugs.map((item, index) => {
      if (indexToToggle !== index) {
        return item
      }
      const updatedBug = {...item, active: !item.active};
      return updatedBug
    })

    setBugs(newBugs);
  }

  return (
    <div>
      <BugContext value={{
        bugs,
        addBug,
        removeBug,
        toggleBug
      }}>
        <AddBugForm />
        <BugList />
      </BugContext>
    </div>
  )
}