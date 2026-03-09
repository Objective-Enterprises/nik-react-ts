import { useState } from "react";
import DisplayNumbers from "./DisplayNumbers";
import AddCountForm from "./AddCountForm";
import ResetList from "./ResetList";

export default function CounterList() {
  const [counts, setCounts] = useState<number[]>([]);
  const [startNumber, setStartNumber] = useState('');
  return (
    <>
      <AddCountForm
        counts={counts}
        setCounts={setCounts}
        startNumber={startNumber}
        setStartNumber={setStartNumber}
      />
      <ResetList setCounts={setCounts}/>
      <DisplayNumbers numbers={counts}/>
    </>
  );
}
