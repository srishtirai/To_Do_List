import {ADD_LIST, DELETE_LIST} from "../types"

export const addList = newList => ({
    type: ADD_LIST,
    newList
})

export const deleteList = listId => ({
    type: DELETE_LIST,
    listId
})