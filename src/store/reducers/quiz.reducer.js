const initSate = {
  questions: [
    {
      id: 1,
      question: "Billy is an athlete. He…..every day.",
      options: ["studies", "exercise", "goes to training course", "exercises"],
      answer: "exercises" // index 3 exercises
    },
    {
      id: 2,
      question: "My mother is at her office. She…..right now. ",
      options: ["works", "is eating", "is working", "finishes her task"],
      answer: "is working" // index 2 is working
    },
    {
      id: 3,
      question: "Justin…..tomorrow.",
      options: ["will studying", "is going to play basketball", "will be study", "is going to visited his friend"],
      answer: "is going to play basketball" // index 1 is going to play basketball
    },
    {
      id: 4,
      question: "Alex had some troubled homework to do, so he…..last night.",
      options: ["resolved them", "is studying", "had already resolved it", "was studying"],
      answer: "resolved them" // index 0 have
    },
    {
      id: 5,
      question: "You must miss your school friend. How long…..you not seen them after graduation?",
      options: ["have", "had", "is", "would"],
      answer: "have" // index 0 have
    },
  ],
  answers: [],
  loading: false,
  error: null,
  score: 0
}

const quizReducer = (state = JSON.parse(JSON.stringify(initSate)), action) => {
  switch (action.type) {
    case ('ADD_ANSWER'):
      let temp = JSON.parse(localStorage.getItem('quiz'))
      localStorage.setItem('quiz', JSON.stringify({ ...temp, currentQuestion: temp.currentQuestion + 1 }))
      return { ...state, answers: state.answers.concat(action.payload), loading: true}
    case ('CHANGE_LOAD'):
      return { ...state, loading: false };
    case ('REM_ANSWER') :
      return { ...state, answers: []}
    case ('CORRECTION'):
      let c = state.questions.map(function (obj) { return obj.answer; });
      let d = state.answers
      let score = 0
      for (let i = 0; i < c.length; i++) {
        console.log(i);
        if (c[i] === d[i]) {
          score++
        } else {
          console.log(c[i],d[i]);
        }
      }
      score = (score/c.length) * 100
      return { ...state, score: score}
    default:
      return state;
  }
}

export default quizReducer;