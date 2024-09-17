import React from "react";
import SingleComponent from "./SingleComponent";

const ComponentsList = ({ items, handleDelete, editItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleComponent
            key={item.id}
            item={item}
            handleDelete={handleDelete}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default ComponentsList;
