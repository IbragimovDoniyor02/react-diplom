
const initialState = {
    competitions: [],
    loading: false,
    error: null,
  };
  
  export const competitionsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_COMPETITIONS_SUCCESS':
        return { ...state, competitions: action.payload, loading: false, error: null };
      case 'FETCH_COMPETITIONS_FAILURE':
        return { ...state, competitions: [], loading: false, error: action.payload };
      default:
        return state;
    }
  };
  