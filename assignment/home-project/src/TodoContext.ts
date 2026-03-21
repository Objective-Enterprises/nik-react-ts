import { createContext, useContext } from "react";

export interface Todo {
  text: string,
  done: boolean
}

interface TodoContextValue {
  todos: Todo[];
  removeTodo: (index: number) => void;
  addTodo: (todoText: string) => void;
  updateTodo: (index: number) => void;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export function useTodoContext() {
  const contextValue = useContext(TodoContext);
  if (!contextValue) {
    throw new Error("💥 Can't access the context");
  }
  return contextValue;
}