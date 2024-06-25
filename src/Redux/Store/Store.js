import { applyMiddleware, createStore } from "redux";
import { rootReducers } from "../Reducers/RootReducers";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducers, applyMiddleware(thunk));
