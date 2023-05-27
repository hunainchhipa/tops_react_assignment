import rootReducer from "./Reducers/index";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
