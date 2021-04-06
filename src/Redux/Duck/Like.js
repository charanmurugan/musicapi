export const initialState = {
  like: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKETLIKE":
      return {
        ...state,
        like: [...state.like, action.item],
      };
    default:
      return state;
  }
};
