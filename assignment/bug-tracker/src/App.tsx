import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import { useState } from "react";
import { BugContext, type Bug } from "./BugContext";
import BugPage from "./BugPage";

function App() {
  const [bugs, setBugs] = useState<Bug[]>(() => {
    const localBugs = localStorage.getItem("bugs");
    console.log("localBugs", localBugs)
    if (!localBugs) {
      return []
    }
    const parsedBugs = JSON.parse(localBugs)
    console.log("parsedBugs", parsedBugs)
    return parsedBugs
  })

  function addBug(bugText: string) {
    const newBugs = [...bugs, { text: bugText, active: false }];
    setBugs(newBugs);
    const bugsJson = JSON.stringify(newBugs);
    localStorage.setItem("bugs", bugsJson);
  }

  function removeBug(indexToRemove: number) {
    const newBugs = bugs.filter((_item, index) => {
      return index !== indexToRemove;
    })
    setBugs(newBugs)
    const bugsJson = JSON.stringify(newBugs);
    localStorage.setItem("bugs", bugsJson);
  }

  function toggleBug(indexToToggle: number) {
    const newBugs = bugs.map((item, index) => {
      if (indexToToggle !== index) {
        return item
      }
      const updatedBug = { ...item, active: !item.active };
      return updatedBug
    })

    setBugs(newBugs);
    const bugsJson = JSON.stringify(newBugs);
    localStorage.setItem("bugs", bugsJson);
  }

  return (
    <BrowserRouter>
      <BugContext value={{
        bugs,
        addBug,
        removeBug,
        toggleBug
      }}>
        <h1>NIKO</h1>
        <div>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bug/:index" element={<BugPage />} />
        </Routes>
      </BugContext>
    </BrowserRouter>
  )
}

export default App

/*
Assignment: Social Network

App
  /(home)
  /about
  /contact
  /users
    - <AddUserForm />
    - <UserList />
      - <UserItem />
        - <RemoveUser />
  /users/:id
    - Name
    - Job
    - Bio
    - <UpdateUserForm />
*/