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
        Remove this item
      </button>
    </li>
  )
}