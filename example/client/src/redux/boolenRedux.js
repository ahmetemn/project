
const initialState = {
    added: false,
  };
  
  const booleanReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ADDED':
        return {
            ...state,
            added: !state.added
          };
      default:
        return state;
    }
  };
  
  export default booleanReducer;
  