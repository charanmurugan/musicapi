export const initialState = {
  basket: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        basket: [],
      };
    default:
      return state;
  }
};
