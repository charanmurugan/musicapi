import { combineReducers, createStore } from "redux";
import BasketReducer from "./Duck/Search";
import ViewReducer from "./Duck/ViewScreen";
import ClickReducer from "./Duck/Clicker";
import likeReducer from "./Duck/Like";

const reducer = combineReducers({
  basket: BasketReducer,
  view: ViewReducer,
  click: ClickReducer,
  like: likeReducer,
});

const store = createStore(reducer);

export default store;
