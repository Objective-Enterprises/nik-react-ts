import { useState } from "react"
import AddValueForm from "./AddValueForm"
import List from "./List"

export default function App () {
  const [values, setValues] = useState(['A', 'B', 'C', 'D', 'E', 'A'])
  function addValue (value: string) {
    const newValues = [...values, value]
    setValues(newValues)
  }
  return (
    <>
      <h1>App</h1>
      <AddValueForm addValue={addValue} />
      <List values={values} />
    </>
  )
}
