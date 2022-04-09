import { ADD_CARD, ADD_LIST, DELETE_CARD, DELETE_LIST } from "../types";

const initialState = {
    lists: []
}

const dataReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_LIST:
        return {
            lists: [...state.lists, action.newList]
        };
    case DELETE_LIST:
        const deleteIndex = state.lists.findIndex(x => x.id === action.listId);
        state.lists.splice(deleteIndex, 1);
        return {
            lists: state.lists
        };
    case ADD_CARD:
        const listIndex = state.lists.findIndex(x => x.id === action.listId);
        state.lists[listIndex].cards.push(action.newCard);
        return {
            lists: state.lists
        }
    case DELETE_CARD:
        const deleteListIndex = state.lists.findIndex(x => x.id === action.listId);
        const deleteCardIndex = state.lists[deleteListIndex].cards.findIndex(x => x.id === action.cardId);
        state.lists[deleteListIndex].cards.splice(deleteCardIndex, 1);
        return {
            lists: state.lists
        };
    default:
      return state;
  }
};

export default dataReducer;