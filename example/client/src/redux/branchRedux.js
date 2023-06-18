// reducers/branchReducer.js

const initialState = {
  hastaneBranchName: [],
};

const branchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BRANCHES':
      return {
        ...state,
        hastaneBranchName: action.payload,
      };
    default:
      return state;
  }
};

export default branchReducer;
