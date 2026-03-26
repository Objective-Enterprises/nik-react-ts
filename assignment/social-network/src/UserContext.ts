import { createContext, useContext } from "react";

export interface User {
  userName: string,
  job: string,
  bio: string
}

interface UserContextValue {
  users: User[];
  addUser: (userName: string) => void;
  removeUser: (indexToRemove: number) => void;
  updateUser: (
    indexToUpdate: number,
    user: Partial<User>
  ) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined)

export function useUserContext() {
  const contextValue = useContext(UserContext);
  if (!contextValue) {
    throw new Error("🔴 can't access context");
  }
  return contextValue;
}