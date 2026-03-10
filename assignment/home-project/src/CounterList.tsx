import { useState } from "react";
import DisplayNumbers from "./DisplayNumbers";
import AddCountForm from "./AddCountForm";
import ResetList from "./ResetList";

export default function CounterList() {
  const [counts, setCounts] = useState<number[]>([]);

  function addCount(number: number) {
    const newCounts = [...counts, Number(number)];
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
      <DisplayNumbers numbers={counts}/>
    </>
  );
}
