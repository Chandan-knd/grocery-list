import React from "react";

const SingleComponent = ({ item, handleDelete, editItem }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        className="item-check"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p style={{ textDecorationLine: item.completed && "line-through" }}>
        {item.name}
      </p>
      <button
        type="button"
        onClick={() => handleDelete(item.id)}
        className="btns delete-btn"
      >
        delete
      </button>
    </div>
  );
};

export default SingleComponent;
