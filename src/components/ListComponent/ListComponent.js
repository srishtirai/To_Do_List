import React from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { AiOutlineClose } from "react-icons/ai";
import InputComponent from '../InputComponent/InputComponent';
import CardComponent from "../CardComponent/CardComponent";
import { deleteList } from '../../redux/action/listActions';

const ListComponent = ({ listInfo }) => {
  const dispatch = useDispatch();
  const {title, cards, id} = listInfo;
  const form = `add_card_${id}`;
  const removeList = () => {
    dispatch(deleteList(id));
  }

  return (
    <div className="list-container">
        <div className="list-container-heading">
            <p>{title}</p>
            <button onClick={removeList}><AiOutlineClose/></button>
        </div>
        <div className="list-container-contents">
            {
              cards && cards.map( card =>
                <CardComponent key={card.id} cardInfo={card} listId={id}/>
              )
            }
            <InputComponent type="card" listId={id} form={form}/>
        </div>
    </div>
  );
}

export default ListComponent;