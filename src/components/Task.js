import { CloseCircleOutline } from "react-ionicons";
import style from './Task.module.css'

export function Task({ item, handleDeleteItem, handleToogleItem }) {
  return (
    <li className={style.list}>
      <div className={style.item}>
        <input
          key={item.id}
          type="checkbox"
          value={item.done}
          onChange={() => handleToogleItem(item.id)}
        />
        <span style={item.done ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
      </div>
      <button className={style.btn} onClick={() => handleDeleteItem(item.id)}>
        <CloseCircleOutline color={"#00000"} height="32px" width="32px" />
      </button>
    </li>
  );
}
