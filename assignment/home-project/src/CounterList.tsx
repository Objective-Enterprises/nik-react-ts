import { useState } from "react";
import DisplayNumbers from "./DisplayNumbers";
import AddCountForm from "./AddCountForm";
import ResetList from "./ResetList";
import { CounterListContext } from "./counterListContext";

export default function CounterList() {
  const [counts, setCounts] = useState<number[]>([]);

  function addCount(number: number) {
    const newCounts = [...counts, Number(number)];
    setCounts(newCounts);
  }

  function removeCount(indexToRemove: number) {
    const newCounts = counts.filter((_item, index) => {
      return index !== indexToRemove;
    }) 
    setCounts(newCounts);
  }

  function updateCount(indexToUpdate: number, newCount: number) {
    const newCounts = counts.map((item, index) => {
      if (indexToUpdate !== index) {
        return item
      }
      return newCount
    })
    
    setCounts(newCounts);
  }

  function resetCounts () {
    setCounts([]);
  }

  function incrementLast() {
    if (counts.length === 0) {
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
  }

  return (
    <>
      <AddCountForm
        addCount={addCount}
        incrementLast={incrementLast}
      />
      <ResetList resetCounts={resetCounts}/>
      <CounterListContext value={{ removeCount, updateCount }}>
        <DisplayNumbers 
          numbers={counts}
        />
      </CounterListContext>
    </>
  );
}


// implement removeCount
// for each count (item in the list) there should be a button next to it
// that says "Remove"

// implement updateCount
// for each count there should be an INPUT and the BUTTON that says "Update"

// hint:
// a new CountItem component is required inside the DisplayNumbers

// inheritance:
// CounterList --> DisplayNumbers --> CountItem

