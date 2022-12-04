export const initialState = {
  basket: [],
  user: null,
};
const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const itemIndex = state.basket.findIndex((x) => {
        return x.id === action.id;
      });
      let newBasket = [...state.basket];
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      } else {
        console.log("ERROR");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
