import { useState } from "react"

export default function AddValueForm ({ addValue }: {
  addValue: (value: string) => void
}) {
  const [value, setValue] = useState('')
  console.log('render value', value)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        console.log('value', value)
        addValue(value)
        setValue('')
      }}
    >
      <input
        onChange={(event) => {
          setValue(event.target.value)
        }}
        value={value}
      />
      <button>Submit</button>
      <button
        type='button'
        onClick={() => {
          console.log('reset')
          setValue('')
        }}
      >
        Reset
      </button>
    </form>
  )
}

// Bonus: Find a good blog article about lifting the state

// Inside CounterList, render a new custom AddCountForm component.
// Move the <form> element from CounterList to AddCountForm.
// Submitting the AddCountForm should add a new count with the input value to the list

// Bonus: Inside CounterList, render a new custom ResetList component.
// ResetList should display a button, and clicking the button should remove all the counts from the array.