import { useState } from "react";

export default function CounterList() {
  const [counts, setCounts] = useState<number[]>([]);
  const displayNumbers = counts.map((el, index) => {
    return <li key={index}>{el}</li>;
  });
  return (
    <>
      <button
        onClick={() => {
          console.log("!!!--------- counts: ", counts);
          const newNumbers = [...counts, counts.length];
          console.log("!!!--------- numbers: ", newNumbers);
          setCounts(newNumbers);
        }}
        style={{ marginRight: "5px" }}
      >
        Click to start adding numbers to the array
      </button>
      <button
        onClick={() => {
          const oldNumber = counts[counts.length - 1];
          const newNumber = oldNumber + 1;

          const reversed = counts.reverse();
          const [first, ...rest] = reversed;
          void first;
          const oldNumbers = rest.reverse();

          const newNumbers = [...oldNumbers, newNumber];
          setCounts(newNumbers);
        }}
        style={{ marginLeft: "5px" }}
      >
        Increment the last number
      </button>
      <ul>{displayNumbers}</ul>
    </>
  );
}
