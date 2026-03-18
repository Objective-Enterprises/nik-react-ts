import { useContext } from "react";
import { TodoContext } from "./TodosControllerContext";
import TodoItem from "./TodoItem";

export default function TodoList () { 
  const contextValue = useContext(TodoContext);
  if (!contextValue) {
    return <p>No todos available</p>
  }
  const liItems = contextValue.todos.map((element, index) => {
    return (
      <TodoItem
        key={index}
        element={element}
        index={index}
      />
    )
  });
  return (
    <ul
     style={{ listStyleType: "none" }}
    >
      {liItems}
    </ul> 
  )
}