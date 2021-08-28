const initSate = {
  questions: [
    {
      id: 1,
      question: "Billy is an athlete. He…..every day.",
      options: ["studies", "exercise", "goes to training course", "exercises"],
      answer: 3 // index 3 exercises
    },
    {
      id: 2,
      question: "My mother is at her office. She…..right now. ",
      options: ["works", "is eating", "is working", "finishes her task"],
      answer: 2 // index 2 is working
    },
    {
      id: 3,
      question: "Justin…..tomorrow.",
      options: ["will studying", "is going to play basketball", "will be study", "is going to visited his friend"],
      answer: 1 // index 1 is going to play basketball
    },
    {
      id: 4,
      question: "Alex had some troubled homework to do, so he…..last night.",
      options: ["resolved them", "is studying", "had already resolved it", "was studying"],
      answer: 0 // index 0 have
    },
    {
      id: 5,
      question: "You must miss your school friend. How long…..you not seen them after graduation?",
      options: ["have", "had", "is", "would"],
      answer: 0 // index 0 have
    },
  ],
  answers: [],
  loading: false,
  error: null
}

const quizReducer = (state = JSON.parse(JSON.stringify(initSate)), action) => {
  switch (action.type) {
    case ('ADD_ANSWER'):
      console.log('HELOOOOOOOOO');
      return { ...state, answers: state.answers.concat(action.payload), loading: true}
    case ('CHANGE_LOAD'):
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default quizReducer;