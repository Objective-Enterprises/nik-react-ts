import { useState } from "react";
import DisplayNumbers from "./DisplayNumbers";

export default function CounterList() {
  const [counts, setCounts] = useState<number[]>([]);
  const [startNumber, setStartNumber] = useState<number>();
  const numbers = counts.map((el, index) => {
    return <li key={index}>{el + (startNumber ?? 0)}</li>;
  });
  return (
    <>
      <input 
        type="text" 
        placeholder="Type in a start number"
        style={{ marginBottom: "15px"}}
        onChange={e => setStartNumber(Number(e.target.value))}
      />
      <br/>
      <button
        onClick={() => {
          console.log("!!!--------- counts: ", counts);
          if (startNumber) {
            const newNumbers = [...counts, counts.length];
            console.log("!!!--------- numbers: ", newNumbers);
            setCounts(newNumbers);
          } else {
            alert("⚠️ Specify the start number!");
          }
          
        }}
        style={{ marginRight: "5px" }}
      >
        Click to start adding numbers to the array
      </button>
      <button
        onClick={() => {
          if (!startNumber) {
            alert("⚠️ Specify the start number!");
          } else if (startNumber && counts.length == 0) {
            alert("⚠️ Add at least one number to the array!")
          } else {
            const oldNumber = counts[counts.length - 1];
            const newNumber = oldNumber + 1;

            const reversed = counts.reverse();
            const [first, ...rest] = reversed;
            void first;
            const oldNumbers = rest.reverse();

            const newNumbers = [...oldNumbers, newNumber];
            setCounts(newNumbers);
          }
        }}
        style={{ marginLeft: "5px" }}
      >
        Increment the last number
      </button>
      <DisplayNumbers numbers={numbers}/>
    </>
  );
}
