import React from "react";
import "./styles.scss";

export default function InputComponent({ type }) {

  const addList = () =>{

  }

  return (
    <div className="input-container">
      {
        type === "list" ? 
        <div className="input-container-list">
          <input
            placeholder="Enter list title..."
          ></input>
          <button onClick={() => addList}>
            Add list
          </button>
        </div> :
        <div className="input-container-card">
          <div className="input-container-card-input">
            <input
              name="title"
              placeholder="Enter title"
              size="15"
            ></input>
            <input
              name="subtitle"
              placeholder="Enter the text for this card"
            ></input>
          </div>
          <button onClick={() => addList}>
            Add card
          </button>
        </div>
      }
    </div>
  );
}