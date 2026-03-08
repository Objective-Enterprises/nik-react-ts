export default function List ({ values }: { values: string[] }) {
  const items = values.map((value, index) => {
    return <li key={index}>{value}</li>
  })
  return (
    <ul>
      {items}
    </ul>
  )
}