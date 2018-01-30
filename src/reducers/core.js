
const initialState = {
  isLoading: true
};

const coreReducer = (s = initialState, action) => {

  switch(action.type) {

    case 'SET_LOADING':
      return { ...s, isLoading: true };

    case 'SET_LOADED':
      return { ...s, isLoading: false };

    default:
      return s;

  }

};

export default coreReducer;
