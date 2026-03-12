import CountItem from "./CountItem";

interface DisplayNumberProps {
  numbers: number[];
}

export default function DisplayNumbers({
  numbers,
}: DisplayNumberProps) {
  const liItems = numbers.map((el, index) => {
    return (
      <CountItem 
        key={index}
        element={el}
        index={index}
      />
    );
  });
  return <ul>{liItems}</ul> 
}