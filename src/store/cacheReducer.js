
const defaultState = {
    cash: 0,
  }

export const cacheReducer = (state = defaultState, action) => {
    switch(action.type){
      case 'ADD_CASH': // тип нужен для диспатса в App
        return {...state, cash: state.cash + action.payload}
      case 'GET_CASH':
        return {...state, cash: state.cash - action.payload}
      default:
        return state
    }
  }