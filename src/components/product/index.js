import React from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
const Product = () => {
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <p>Order by</p>
      <button id="click">↓</button>
      <button
        onClick={() =>
          dispatch({
            type: "ASCENDING",
          })
        }
        id="most"
      >
        Most Voted (Z→A)
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DESCENDING",
          })
        }
        id="less"
      >
        Less Voted (A→Z)
      </button>
    </div>
  );
};

export { Product };
