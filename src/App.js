import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  console.log(cash)

const addCash = (cash) => {
  dispatch({type: 'ADD_CASH', payload: cash})
}

const getCash = (cash) => {
  dispatch({type: 'GET_CASH', payload: cash})
}

const addCustomer = (name) => {
  const customer = {
    name,
    id: Date.now(),
  }
  dispatch({type: "ADD_CUSTOMER", payload: customer})
}

const removeCustomer = (customer) => {
  dispatch({type: 'REMOVE_CUSTUMERS', payload: customer.id})
}

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
      <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
   
      <br/>
      <br/>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      {customers.length > 0 ? 
      <div>
        {customers.map(customer => 
        <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          )}
      </div>
      :
      <div>
        Клиенты отсутствуют!
      </div>  
  }
    </div>
  
  );
}

export default App;
