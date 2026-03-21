import CounterList from './CounterList'
import TodosController from './TodosController'

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        alignItems: "stretch"
      }}
    >
      <TodosController />
      <div 
        style={{
          width: "1px",
          borderRight: "10px solid #ccc",
          marginRight: "24px"
        }}
      />
      <CounterList />
    </div>
  )
}

export default App
