import {ADD_LIST, DELETE_LIST} from "../types"

export const addList = newList => ({
    type: ADD_LIST,
    payload: newList
})

export const deleteList = id => ({
    type: DELETE_LIST,
    payload: id
})