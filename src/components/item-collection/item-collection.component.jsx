import React from "react";
import "./item-collection.styles.scss";

const ItemCollection = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{price}</span>
      </div>
    </div>
  );
};

export default ItemCollection;
