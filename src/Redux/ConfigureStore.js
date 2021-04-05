import { combineReducers, createStore } from "redux";
import BasketReducer from "./Duck/Search";
import ViewReducer from "./Duck/ViewScreen";

const reducer = combineReducers({
  basket: BasketReducer,
  view: ViewReducer,
});

const store = createStore(reducer);

export default store;
