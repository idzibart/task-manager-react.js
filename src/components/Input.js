import { useEffect, useRef, useState } from "react";
import { AddCircleOutline } from "react-ionicons";
import style from './Input.module.css'

export function Input({ handleAddItems }) {
  const [description, setDescription] = useState("");
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, done: false, id: Date.now() };

    handleAddItems(newItem);
    setDescription("");
    inputEl.current.focus();
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Add task to list..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={inputEl}
      ></input>
      <button className={style.btn}>
      <AddCircleOutline
  color={'#00000'}
  height="32px"
  width="32px"
/>
      </button>
    </form>
  );
}
