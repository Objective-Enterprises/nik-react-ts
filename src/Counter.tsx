import { useState } from "react";

export default function Counter () {
  const [count, setCount] = useState<number>()
  console.log('render count', count)
  const display = count
    ? <>Count: {count}</>
    : <>Click to start the count</>
  return (
    <button
      onClick={() => {
        console.log('click')
        const newCount = count ? count + 1 : 1
        console.log('newCount', newCount)
        setCount(newCount)
        console.log('click count', count)
      }}
    >
      {display}
    </button>
  )
}