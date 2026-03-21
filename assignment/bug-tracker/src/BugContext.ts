import { createContext, useContext } from "react";

interface BugContextValue {
  bugs: string[];
  addBug: (bugText: string) => void;
  removeBug: (indexToRemove:number) => void;
}

export const BugContext = createContext<BugContextValue | undefined>(undefined)

export function useBugContext() {
  const contextValue = useContext(BugContext);
  if (!contextValue) {
    throw new Error("🔴 can't access context");
  }
  return contextValue;
}