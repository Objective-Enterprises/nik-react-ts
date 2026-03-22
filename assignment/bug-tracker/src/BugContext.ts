import { createContext, useContext } from "react";

export interface Bug {
  text: string,
  active: boolean
}

interface BugContextValue {
  bugs: Bug[];
  addBug: (bugText: string) => void;
  removeBug: (indexToRemove: number) => void;
  toggleBug: (indexToToggle: number) => void;
}

export const BugContext = createContext<BugContextValue | undefined>(undefined)

export function useBugContext() {
  const contextValue = useContext(BugContext);
  if (!contextValue) {
    throw new Error("🔴 can't access context");
  }
  return contextValue;
}