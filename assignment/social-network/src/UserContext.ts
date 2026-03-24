import { createContext, useContext } from "react";

interface UserContextValue {
  users: string[];
  addUser: (userName: string) => void;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined)

export function useUserContext() {
  const contextValue = useContext(UserContext);
  if (!contextValue) {
    throw new Error("🔴 can't access context");
  }
  return contextValue;
}