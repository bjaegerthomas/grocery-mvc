export default function GroceryItem({ item, onToggle, onDelete }) {
    return (
      <li>
        <span style={{ textDecoration: item.purchased ? "line-through" : "none" }}>
          {item.name}
        </span>
  
        <button onClick={() => onToggle(item.id)}>
          {item.purchased ? "Unbuy" : "Bought"}
        </button>
  
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </li>
    );
  }
  