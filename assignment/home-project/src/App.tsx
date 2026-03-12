import CounterList from './CounterList'

function App() {
  return (
    <>
      <CounterList />
    </>
  )
}

export default App

/*
Make a todo app
- Use four components:
  - App
    - TodosController * 
      - AddTodoForm *
      - TodoList * 
        - TodoItem *
    - CounterList
- Features: Add a todo, display the list of todos, and remove a todo
- Use the context to avoid prop drilling
*/