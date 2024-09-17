import React from "react";
import { useState } from "react";
const Form = ({ addItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItems(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery list</h4>
      <div className="form-control">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="forms-input"
        />
        <button type="submit" className="btns">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
