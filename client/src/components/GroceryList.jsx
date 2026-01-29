import GroceryItem from "./GroceryItem";

export default function GroceryList({ items, onToggle, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <GroceryItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
