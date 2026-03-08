export default function DisplayNumbers(
    { numbers } : { numbers: number[];}
) {
  const liItems = numbers.map((el, index) => {
    return <li key={index}>{el}</li>;
  });
  return <ul>{liItems}</ul> 
}