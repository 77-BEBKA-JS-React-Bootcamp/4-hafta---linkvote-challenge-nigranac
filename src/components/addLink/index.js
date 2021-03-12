import React, { useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const AddLink = () => {
  const [text, setText] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="addLink-container">
      <div className="addLink-flex">
        <Link to="/">
          <button>← Return to List</button>
        </Link>
        <div className="link-box">
          <p id="newLink">Add New Link</p>

          <div>
            <p>Link Name</p>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="input"
            ></input>
          </div>
          <div>
            <p>Link URL</p>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="input"
            ></input>
          </div>
        </div>
        <button
          onClick={() =>
            dispatch({
              type: "ADD",
              payload: { linkName: text, url: address },
            })
          }
          onBlur
          id="add"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export { AddLink };
