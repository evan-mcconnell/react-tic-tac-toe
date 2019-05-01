import c from './../constants';

export default (state = [{squares: Array(9).fill(null)}], action) => {
  switch(action.type) {
    case c.SQUARE_CLICK:
      let newState = state.slice(0, action.step + 1);
      newState.push(action.newSquares);
      return newState;
    default:
      return state;

  }
}
