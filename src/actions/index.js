import * as types from '../constants/ActionTypes'

export const increment = (index,adder) => ({ type: types.INCREMENT, index,adder})
export const decrement = (index,decreaser) => ({ type: types.DECREMENT, index,decreaser})
export const multiple = (index, multipler) => ({ type: types.MULTIPLE , index, multipler})