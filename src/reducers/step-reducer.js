import c from './../constants';

export default (state = 0, action) => {
  let newState;
  switch (action.type) {
    case c.SQUARE_CLICK:
      newState = state + 1;
      return newState;
    case c.STEP_CLICK:
      newState = action.step;
      return newState;
    default:
      return state;
  }
}
