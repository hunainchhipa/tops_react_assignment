import reducer from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  reducer: reducer,
});

export default rootReducer;
