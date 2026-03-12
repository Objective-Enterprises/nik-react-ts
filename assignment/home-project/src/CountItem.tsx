import { useState } from "react";

interface CountItemProps {
  element: number
  index: number
  removeCount: (indexToRemove: number) => void;
  updateCount: (indexToUpdate: number, newCount: number) => void;
  // removeCount: () => void;
  // updateCount: (newCount: number) => void;
}

export default function CountItem ({ 
  element, 
  index,
  removeCount,
  updateCount
} : CountItemProps) {
  const [newNumber, setNewNumber] = useState('');
  return (
    <li>
      <span>{element}</span>
      <button 
        type="button"
        onClick={() => removeCount(index)}
      >
        Remove
      </button>
      <form onSubmit={
        e => {
          e.preventDefault();
          if (newNumber) {
            updateCount(index, Number(newNumber))
            // updateCount(Number(newNumber))
            setNewNumber('');
          } else {
            alert("no new number")
          }
        }
      }>
        <input 
          type="text" 
          placeholder="set another number"
          onChange={e => setNewNumber(e.target.value)}
          value={newNumber}
        />
        <button
          type="submit"
        >
          Update
        </button>
      </form>
    </li>
  )
}