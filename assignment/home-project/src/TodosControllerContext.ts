import { createContext } from "react";

interface TodoContextValue {
  todos: string[];
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);