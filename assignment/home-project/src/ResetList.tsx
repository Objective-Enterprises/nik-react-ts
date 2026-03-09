export default function ResetList(
  { setCounts } : {setCounts: (numbers: number[]) => void;}
) {
  return (
    <button 
      type="button"
      onClick={() => setCounts([])}
      style={{marginTop: "10px", border: "4px solid red"}}
    >
      ⚠️ Remove all numbers ⚠️
    </button>
  )
}