interface CountItemProps {
  element: number
  removeCount: () => void;
}

export default function CountItem ({ 
  element, 
  removeCount 
} : CountItemProps) {
  return (
    <li>
      <span>{element}</span>
      <button 
        type="button"
        onClick={removeCount}
      >
        Remove
      </button>
      <form onSubmit={
        e => {
          e.preventDefault();
        }
      }>
        <input 
          type="text" 
          placeholder="set another number"
        />
        <button
          type="button"
        >
          Update
        </button>
      </form>
    </li>
  )
}