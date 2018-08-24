// import imgs from '../dataSet';

const defaultState = 0;
const length = 4;
const rootReducer = (index = defaultState, action) => {
  switch (action.type) {
    case 'LEFT':
      return index === defaultState ? length - 1 : index - action.payload.index;
    case 'RIGHT':
      return index === (length - 1) ? defaultState : index + action.payload.index;
    case 'SELECT':
      return action.payload.index;
    default:
      return index;
  }
};

export default rootReducer;
