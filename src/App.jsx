import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import ComponentsList from "./ComponentsList";
import { ToastContainer, toast } from "react-toastify";

const setLocalStorage = (newList) => {
  localStorage.setItem("myList", JSON.stringify(newList));
};

const getLocalStorage = () => {
  let list = localStorage.getItem("myList");
  if (list) {
    list = JSON.parse(localStorage.getItem("myList"));
  } else {
    list = [];
  }
  return list;
};

const defaultList = JSON.parse(localStorage.getItem("myList") || "[]");

const App = () => {
  // const [items, setItems] = useState(getLocalStorage());
  const [items, setItems] = useState(defaultList);

  const addItems = (item) => {
    if (!item) {
      toast.error("please provide a name");
      return;
    }
    const newItem = { name: item, id: nanoid(), completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added ");
  };

  const handleDelete = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item removed from list");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItems={addItems} />
      <ComponentsList
        items={items}
        handleDelete={handleDelete}
        editItem={editItem}
      />
    </section>
  );
};

export default App;
