const DECREMENT = "app/counter/DECREMENT";
const INCREMENT = "app/counter/INCREMENT";

// Reducer is exported as default
export default (state = 0, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

// Action creators are exported
export const decrement = () => ({
  type: DECREMENT
});

export const increment = () => ({
  type: INCREMENT
});
