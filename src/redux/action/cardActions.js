import {ADD_CARD, DELETE_CARD} from "../types"

export const addCard = (newCard, listId) => ({
    type:ADD_CARD,
    newCard,
    listId
})

export const deleteCard = (cardId, listId) => ({
    type: DELETE_CARD,
    cardId,
    listId
})