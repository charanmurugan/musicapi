export const initialState = {
  heart: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_HEARTlIKE":
      return {
        heart: true,
      };
    case "REMOVE_FROM_HEARTlIKE":
      return {
        heart: false,
      };
    default:
      return state;
  }
};
