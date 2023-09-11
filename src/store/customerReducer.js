
const defaultState = {
    customers: [],
}

export const customerReducer = (state = defaultState, action) => {
    switch(action.type){
      case 'ADD_CUSTOMER': // тип нужен для диспатса в App
        return {...state, customers: [...state.customers, action.payload]}
      case 'REMOVE_CUSTUMERS':
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state
    }
  }