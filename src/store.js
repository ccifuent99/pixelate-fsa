import { createStore } from 'redux';

const initialState = {
  grid: [],
  color: 'red'
};

//your redux store should be able to
//CHANGE_CELL
//SET_COLOR

const reducer = (state = initialState, action)=> {
  if(action.type === 'ADD_ROW'){
    const row = new Array(20).fill('');
    row[0] = 'red';
    state = {...state, grid: [...state.grid, row]}
  }
  if(action.type === 'SET_COLOR'){
    if(state.color === 'red'){
      state = {...state, color: ''}
    }
    else{
      state = {...state, color: 'red'}
    }
  }
  console.log(state);
  return state;
};

const store = createStore(reducer);

export default store;
