import { createContext, useContext } from "react";

interface TodoContextValue {
  todos: string[];
  removeTodo: (index: number) => void;
  addTodo: (todoText: string) => void;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export function useTodoContext() {
  const contextValue = useContext(TodoContext);
  if (!contextValue) {
    throw new Error("💥 Can't access the context");
  }
  return contextValue;
}