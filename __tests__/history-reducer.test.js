import historyReducer from '../src/reducers/history-reducer';
import c from './../src/constants';

describe('historyReducer', () => {
  let action;
  const sampleState = [
    {
      squares: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ]
    },
    {
      squares: [
        null,
        null,
        null,
        null,
        null,
        'X',
        null,
        null,
        null,
      ]
    }
  ];

  test('Should return default if no action type is recognized', () => {
    expect(historyReducer(sampleState, { type: null })).toEqual(sampleState);
  });

  test('clicking on a square will add an index to history containing a new board state', () => {
    action = {
      type: c.SQUARE_CLICK,
      newSquares: {squares: [null, 'O', null, null, null, 'X', null, null, null]},
    };
    expect(historyReducer(sampleState, action)).toEqual([
      {
        squares: [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ]
      },
      {
        squares: [
          null,
          null,
          null,
          null,
          null,
          'X',
          null,
          null,
          null,
        ]
      },
      {
        squares: [
          null,
          'O',
          null,
          null,
          null,
          'X',
          null,
          null,
          null,
        ]
      },
    ]);
  });

});
