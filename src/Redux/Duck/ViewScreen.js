export const initialState = {
  view: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKETVIEW":
      return {
        ...state,
        view: [...state.view, action.item],
      };
    case "REMOVE_FROM_BASKETVIEW":
      return {
        view: [],
      };
    default:
      return state;
  }
};
