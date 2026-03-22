import { useBugContext } from "./BugContext";
import BugItem from "./BugItem";

export default function BugList () {
  const contextValue = useBugContext();
  const liItems = contextValue.bugs.map((element, index) => {
    return (
      <BugItem 
        key={index}
        element={element}
        index={index}
      />
    )
  })
  return (
    <ul
      style={{ listStyleType: "none" }}
    >
      {liItems}
    </ul>
  )
}