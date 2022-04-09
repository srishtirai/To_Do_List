import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

import { deleteCard } from "../../redux/action/cardActions";
import "./CardComponent.scss";

const CardComponent = ({ cardInfo, listId }) => {
  
  const dispatch = useDispatch();
  const {title, desc, id} = cardInfo;

  const removeCard = () => {
    dispatch(deleteCard(id, listId));
  }

  return (
    <div className="card-container">
        <div className="card-container-title">
            <p>{title}</p>
            <button onClick={removeCard}><AiOutlineClose/></button>
        </div>
        <div className="card-container-subtitle">
            {desc}
        </div>
    </div>
  );
}

export default CardComponent;