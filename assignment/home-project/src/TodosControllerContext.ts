import { createContext } from "react";

interface TodoContextValue {
  todos: string[];
  removeTodo: (index: number) => void;
  addTodo: (todoText: string) => void;
}

export const TodoContext = createContext<TodoContextValue | undefined>(undefined);