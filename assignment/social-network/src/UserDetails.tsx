import type { User } from "./UserContext"
import { Link } from "react-router-dom"

export interface UserDetailsProps {
  element: User
  index: number
}

export default function UserDetails ({
  element,
  index
}: UserDetailsProps) {
  const userPath = `/users/${index}`
  return (
    <Link
      to={userPath}
    >
      {element.userName}
    </Link>
  )
}