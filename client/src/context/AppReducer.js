export default (state, action) => {
  console.log(state, 'satoussss');
  switch (action.type) {
    case 'ADD_EXERCICE':
      return {
        ...state,
        exercice: action.payload,
      };
    default:
      return state;
  }
};
