import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import "./styles.scss";
import { v4 as uuid } from 'uuid';
import { addList } from '../../redux/action/listActions';
import { addCard } from '../../redux/action/cardActions';

let InputComponent = ({type, listId, handleSubmit} ) => {
  const dispatch = useDispatch();
  
  const addNewList = value => {
    const newList = value;
    newList['id'] = uuid();
    newList['cards'] = [];
    dispatch(addList(newList));
  }    
 
  const addNewCard = value => {
    const newCard = value;
    newCard['id'] = uuid();
    dispatch(addCard(newCard, listId));
  }

  return (
    <form 
      onSubmit={handleSubmit((values) => 
        type === "list" ? addNewList(values) : addNewCard(values)) }
    >
      <div className="input-container">
      {
        type === "list" ? 
        <div className="input-container-list">
          <Field
            name="title"
            placeholder="Enter list title..."
            component="input" 
            type="text"
          />
          <button type="submit">
            Add list
          </button>
        </div> :
        <div className="input-container-card">
          <div className="input-container-card-input">
            <Field
              name="title"
              placeholder="Enter title"
              component="input" 
              type="text"
            />
            <Field
              name="desc"
              placeholder="Enter the text for this card"
              component="input" 
              type="text"
            />
          </div>
          <button type="submit">
            Add card
          </button>
        </div>
      }
    </div>
    </form>
  )
}

InputComponent = reduxForm({
  form: 'add_list_card'
})(InputComponent);

export default InputComponent;
