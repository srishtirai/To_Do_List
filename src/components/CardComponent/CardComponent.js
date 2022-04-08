import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../redux/action/cardActions";
import "./styles.scss";

const CardComponent = ({ cardInfo, listId }) => {
  const dispatch = useDispatch();
  const {title, desc, id} = cardInfo;

  const removeCard = () => {
    dispatch(deleteCard(id, listId));
  }

  return (
    <div className="card-container">
        <div className="title">
            <p>{title}</p>
            <button onClick={removeCard}>X</button>
        </div>
        <div className="subtitle">
            {desc}
        </div>
    </div>
  );
}

export default CardComponent;