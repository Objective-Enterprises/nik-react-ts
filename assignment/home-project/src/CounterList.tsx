import { useState } from "react";

export default function CounterList () {
  const [count, setCount] = useState<number[]>([]);
  const displayNumbers = 
      <>
        <ul>
          {
            count.map((el, index) => {
              return <li key={index}>{el}</li>
            })
          }
        </ul>
      </>
  return (
    <>
      <button
        onClick={() => {
          const numbers = [...count];
          const length = count.length;
          console.log("==========> array length: ", length);
          numbers.push(length)
          console.log("!!!--------- count: ", count);
          console.log("!!!--------- numbers: ", numbers);
          setCount(numbers);
        }}
        style={{marginRight: "5px"}}
      >
        Click to start adding numbers to the array
      </button>
      <button
        onClick={() => {
          const numbers = [...count];
          numbers[numbers.length-1] ++;
          setCount(numbers);
        }}
        style={{marginLeft: "5px"}}
      >
        Increment the last number
      </button>
      {displayNumbers}
    </>
  )
}