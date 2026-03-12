import { useState } from "react";
interface AddCountFormProps {
  addCount: (number: number) => void;
  incrementLast: () => void;
}

export default function AddCountForm ({
  addCount,
  incrementLast
}: AddCountFormProps) {
  const [startNumber, setStartNumber] = useState('');
  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        if (startNumber) {
          addCount(Number(startNumber));
          setStartNumber('');
        } else {
          alert("⚠️ Specify a number to add!");
        }
      } 
    }>
      <input 
        type="text" 
        placeholder="Type in a start number"
        style={{ 
          marginBottom: "15px",
          display: "block"
        }}
        onChange={e => setStartNumber(e.target.value)}
        value={startNumber}
      />
      <button
        type="button"
        style={{ marginRight: "5px" }}
      >
        Click to start adding numbers to the array
      </button>
      <button
        type="button"
        onClick={incrementLast}
        style={{ marginLeft: "5px" }}
      >
        Increment the last number
      </button>
    </form>
  )
}