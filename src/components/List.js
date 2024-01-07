import { Task } from "./Task";
import style from './List.module.css'

export function List({ items, handleDeleteItem, handleToogleItem }) {
  return (
    <ul className={style.list}>
      {items.map((item) => (
        <Task
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToogleItem={handleToogleItem}
          key={item.id}
        />
      ))}
    </ul>
  );
}
