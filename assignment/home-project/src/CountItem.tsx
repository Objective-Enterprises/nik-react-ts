import { useState } from "react";
import { useCounterListContext } from "./counterListContext";

interface CountItemProps {
  element: number
  index: number
  // removeCount: () => void;
  // updateCount: (newCount: number) => void;
}

export default function CountItem ({ 
  element, 
  index,
} : CountItemProps) {
  const value = useCounterListContext()
  const [newNumber, setNewNumber] = useState('');
  return (
    <li>
      <span>{element}</span>
      <button 
        type="button"
        onClick={() => value.removeCount(index)}
      >
        Remove
      </button>
      <form onSubmit={
        e => {
          e.preventDefault();
          if (newNumber) {
            value.updateCount(index, Number(newNumber))
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