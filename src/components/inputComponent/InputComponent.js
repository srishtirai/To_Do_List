import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { v4 as uuid } from "uuid";

import { addList } from "../../redux/action/listActions";
import { addCard } from "../../redux/action/cardActions";
import "./InputComponent.scss";

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = "Required"
  } 
  if (!values.desc) {
    errors.desc = "Required"
  } 
  return errors;
}

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error }
}) => (
  <div className="input-area">
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        (error && <span>{error}</span>) 
      }
  </div>
)

let InputComponent = ({type, listId, handleSubmit, form} ) => {

  const dispatch = useDispatch();
  
  const addNewList = value => {
    const newList = {
      ...value,
      id: uuid(),
      cards: []
    };
    dispatch(addList(newList));
    dispatch(reset(form));
  }; 
 
  const addNewCard = value => {
    const newCard = value;
    newCard["id"] = uuid();
    dispatch(addCard(newCard, listId));
    dispatch(reset(form));
  };

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
              component={renderField}
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
                component={renderField}
                type="text"
              />
              <Field
                name="desc"
                placeholder="Enter the text for this card"
                component={renderField}
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
  validate
})(InputComponent);

export default InputComponent;
