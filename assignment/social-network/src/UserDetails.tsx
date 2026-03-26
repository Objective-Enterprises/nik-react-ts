import type { User } from "./UserContext"
import { Link } from "react-router-dom"

export interface UserDetailsProps {
  element: User
  index: number
  variant: "listItem" | "userPage"
}

export default function UserDetails ({
  element,
  index,
  variant
}: UserDetailsProps) {
  const userPath = `/users/${index}`
  if (variant === "listItem") {
    return (
      <Link
        to={userPath}
      >
        {element.userName}
      </Link>
    )
  }

  return (
    <>
      <h3>{element.userName}</h3>
      <p>Job: {element.job}</p>
      <p>Bio: {element.bio}</p>
    </>
  )
  
}