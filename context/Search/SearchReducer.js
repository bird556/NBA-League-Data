const searchReducer = (state, action) => {
  switch (action.type) {
    case 'GET_SEARCHRESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    case 'CLEAR_SEARCHRESULTS':
      return {
        ...state,
        searchResults: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
