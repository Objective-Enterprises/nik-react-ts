import { useParams } from "react-router-dom";
import { useBugContext } from "./BugContext";
import BugDetails from "./BugDetails";


export default function BugPage() {
  const params = useParams()
  if (!params.index) {
    throw new Error("index is required")
  }
  const index = Number(params.index)
  const bugContext = useBugContext()
  const element = bugContext.bugs[index]
  if (!element) {
    return <p>404: bug not found</p>
  }
  return (
    <BugDetails
      element={element}
      index={index}
    />
  )
}