import { useState } from "react";

interface CountItemProps {
  element: number
  removeCount: () => void;
  updateCount: (newCount: number) => void;
}

export default function CountItem ({ 
  element, 
  removeCount,
  updateCount
} : CountItemProps) {
  const [newNumber, setNewNumber] = useState('');
  return (
    <li>
      <span>{element}</span>
      <button 
        type="button"
        onClick={removeCount}
      >
        Remove
      </button>
      <form onSubmit={
        e => {
          e.preventDefault();
          if (newNumber) {
            updateCount(Number(newNumber))
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
          type="button"
        >
          Update
        </button>
      </form>
    </li>
  )
}