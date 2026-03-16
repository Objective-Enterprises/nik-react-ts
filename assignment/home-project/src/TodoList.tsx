import { useContext } from "react";
import { TodoContext } from "./TodosControllerContext";

export default function TodoList () { 
  const contextValue = useContext(TodoContext);
  if (!contextValue) {
    return <p>NO todos available</p>
  }
  const liItems = contextValue.todos.map((el, index) => {
    return <li key={index}>{el}</li>
  });
  return <ul>{liItems}</ul>
}