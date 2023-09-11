import { createStore, combineReducers } from "redux";
import { cacheReducer } from "./cacheReducer";
import { customerReducer } from './customerReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    cash: cacheReducer,
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());