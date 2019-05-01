import stepReducer from '../src/reducers/step-reducer';
import c from './../src/constants';



describe('stepReducer', () => {
  let action;
  const testStep = 0;

  test('Should return default if no action type is recognized', () => {
    expect(stepReducer(0, { type: null })).toEqual(0);
  });

  test('clicking on a square will incerement the step by 1', () => {
    action = {
      type: c.SQUARE_CLICK,
      stepNumber: testStep
    }
    expect(stepReducer(0, action)).toEqual(testStep + 1);
  });

  test('clicking on a step will reset stepNumber to that step', () => {
    action = {
      type: c.STEP_CLICK,
      step: 3
    }
    expect(stepReducer(6, action)).toEqual(3);
  });

})
