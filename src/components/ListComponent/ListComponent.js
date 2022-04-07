import React from "react";
import "./styles.scss";
import InputComponent from '../InputComponent/InputComponent';
import CardComponent from "../CardComponent/CardComponent";

export default function ListComponent({ title }) {

  return (
    <div className="list-container">
        <div className="list-container-heading">
            <p>{title}</p>
            <button>X</button>
        </div>
        <div className="list-container-contents">
            <CardComponent title={"Products"} subtitle={"new products"}/>
            <InputComponent type="card"/>
        </div>
    </div>
  );
}