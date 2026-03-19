import { useTodoContext } from "./TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList () { 
  const contextValue = useTodoContext();
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