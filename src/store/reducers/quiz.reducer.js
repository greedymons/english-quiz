const initSate = {
  answers: [],
  loading: false,
  error: null
}

const quizReducer = (state = initSate, action) => {
  switch (action.type) {
    case ('ADD_ANSWER'):
      return { ...state, answers: state.answers.concat(action.payload)}
    default:
      return state;
  }
}

export default quizReducer;