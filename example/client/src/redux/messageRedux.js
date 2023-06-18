// reducers/branchReducer.js

const initialState = {
    messageRedux: [],
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MESSAGES':
        return {
          ...state,
          messageRedux: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default messageReducer;
  