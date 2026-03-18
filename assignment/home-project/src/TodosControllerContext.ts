import { createContext } from "react";

interface TodoContextValue {
  todos: string[];
  removeTodo: (index: number) => void;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);