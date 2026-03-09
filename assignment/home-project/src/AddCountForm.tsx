type AddCountFormProps = {
  counts: number[];
  setCounts: (numbers: number[]) => void;
  startNumber: string;
  setStartNumber: (number: string) => void;
}

export default function AddCountForm (
  { counts, 
    setCounts,
    startNumber, 
    setStartNumber 
  }: AddCountFormProps
) {
  return (
    <form onSubmit={
      e => {
        e.preventDefault()
        console.log("!!!--------- counts: ", counts);
        if (startNumber) {
          const newNumbers = [...counts, Number(startNumber)];
          console.log("!!!--------- numbers: ", newNumbers);
          setCounts(newNumbers);
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
        style={{ marginRight: "5px" }}
      >
        Click to start adding numbers to the array
      </button>
      <button
        type="button"
        onClick={() => {
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
        }}
        style={{ marginLeft: "5px" }}
      >
        Increment the last number
      </button>
    </form>
  )
}