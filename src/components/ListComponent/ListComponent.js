import React from "react";
import "./styles.scss";
import InputComponent from '../InputComponent/InputComponent';
import CardComponent from "../CardComponent/CardComponent";

export default function ListComponent({ type }) {

  return (
    <div className="list-container">
        <div className="list-container-add-card">
            <CardComponent title={"Products"} subtitle={"new products"}/>
            <InputComponent type="card"/>
        </div>
    </div>
  );
}