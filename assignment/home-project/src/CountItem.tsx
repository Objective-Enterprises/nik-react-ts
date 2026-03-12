import { useState } from "react";

interface CountItemProps {
  element: number
  removeCount: () => void;
}

export default function CountItem ({ 
  element, 
  removeCount 
} : CountItemProps) {
  const [specifiedNumber, setSpecifiedNumber] = useState('');
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
          if (specifiedNumber) {
            // updateCount
            setSpecifiedNumber('');
          } else {
            alert("no new number")
          }
        }
      }>
        <input 
          type="text" 
          placeholder="set another number"
          onChange={e => setSpecifiedNumber(e.target.value)}
          value={specifiedNumber}
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