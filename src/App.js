import { useState } from "react";
import { Input } from "./components/Input";
import { List } from "./components/List";
import { NavBar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Wrapper } from "./components/Wrapper";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <Wrapper>
      <NavBar>
        <Input handleAddItems={handleAddItems} />
      </NavBar>
      <Main>
        <List
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToogleItem={handleToogleItem}
        />
      </Main>
    </Wrapper>
  );
}
