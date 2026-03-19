import { createContext, useContext } from "react";

interface CounterListContextValue {
  removeCount: (indexToRemove: number) => void;
  updateCount: (indexToUpdate: number, newCount: number) => void;
}

export const CounterListContext = createContext<CounterListContextValue | undefined>(undefined)

export function useCounterListContext() {
  const value = useContext(CounterListContext)
  if (!value) {
    throw new Error("useCounterListContext must be used within a CounterListContext");
  }
  return value;
}