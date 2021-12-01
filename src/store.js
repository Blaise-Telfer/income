import { createStore, combineReducers } from "redux";
import result from "./redux/reducers";

const reducer = combineReducers({ result });

export const store = createStore(reducer);