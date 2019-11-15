import React from "react";
import "./preview-collection.styles.scss";
import ItemCollection from "../item-collection/item-collection.component";
const previewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItemProps }) => {
            return <ItemCollection key={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default previewCollection;
