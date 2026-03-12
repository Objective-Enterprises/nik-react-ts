import CountItem from "./CountItem";

interface DisplayNumberProps {
  numbers: number[];
  removeCount: (number: number) => void;
}

export default function DisplayNumbers({
  numbers,
  removeCount
}: DisplayNumberProps) {
  const liItems = numbers.map((el, index) => {
    return (
      <CountItem 
        key={index}
        element={el}
        removeCount={() => removeCount(index)}
      />
    );
      // return <li key={index}>{el}</li>;
  });
  return <ul>{liItems}</ul> 
}