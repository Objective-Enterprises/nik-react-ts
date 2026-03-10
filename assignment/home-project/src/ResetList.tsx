interface ResetListProps {
  resetCounts : () => void
}

export default function ResetList({
  resetCounts
}: ResetListProps) {
  return (
    <button 
      type="button"
      onClick={resetCounts}
      style={{marginTop: "10px", border: "4px solid red"}}
    >
      ⚠️ Remove all numbers ⚠️
    </button>
  )
}