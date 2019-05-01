import rootReducer from './../src/reducers/index-reducer';
import historyReducer from './../src/reducers/history-reducer';
import stepReducer from './../src/reducers/step-reducer';
import { createStore } from 'redux';
import c from './../src/constants';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  let action;

  test('Should return default if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      history: [{squares: [null, null, null, null, null, null, null, null, null]}],
      stepNumber: 0
    });
  });

  test('Should contain historyReducer logic', () => {
    expect(store.getState().history).toEqual(historyReducer(undefined, { type: null }));
  });

  test('Should contain stepReducer logic', () => {
    expect(store.getState().stepNumber).toEqual(stepReducer(undefined, { type: null }));
  });

})
