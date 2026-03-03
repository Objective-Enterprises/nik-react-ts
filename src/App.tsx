import Counter from "./Counter"
import Welcome from "./Welcome"

export default function App () {
  const result = 342987234 * 234987234
  return (
    <>
      <h1>App</h1>
      <Counter />
      <div>342987234 * 234987234 = {result}</div>
      <Welcome person="Dorothy" punctuation="!"/>
      <Welcome greeting="Hello" person="Tallulah"/>
      <Welcome person="Zelda" />
    </>
  )
}
