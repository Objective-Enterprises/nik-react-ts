import CountItem from "./CountItem";

interface DisplayNumberProps {
  numbers: number[];
  removeCount: (indexToRemove: number) => void;
  updateCount: (indexToUpdate: number, newCount: number) => void;
}

export default function DisplayNumbers({
  numbers,
  removeCount, 
  updateCount
}: DisplayNumberProps) {
  const liItems = numbers.map((el, index) => {
    return (
      <CountItem 
        key={index}
        element={el}
        index={index}
        removeCount={removeCount}
        updateCount={updateCount}
        // removeCount={() => removeCount(index)}
        // updateCount={(newCount) => updateCount(index, newCount)}
      />
    );
  });
  return <ul>{liItems}</ul> 
}