import React from "react";
import "./styles.scss";
export default function CardComponent({ title, subtitle }) {

  return (
    <div className="card-container">
        <div className="title">
            <p>{title}</p>
            <button>X</button>
        </div>
        <div className="subtitle">
            {subtitle}
        </div>
    </div>
  );
}