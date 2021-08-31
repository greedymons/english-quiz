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
    {
      id: 6,
      question: "Could I please have the calculator when you are finished…..it?",
      options: ["with", "to", "of", "by"],
      answer: "with"
    },
    {
      id: 7,
      question: "Gandhi turned off the computer because he was tired…..working on the project.",
      options: ["with", "to", "of", "by"],
      answer: "of"
    },
    {
      id: 8,
      question: "My house is equipped…..air-conditioning and a balcony with a set of barbeque.",
      options: ["with", "to", "of", "by"],
      answer: "with"
    },
    {
      id: 9,
      story: `In 1983, archaeologists in southern Germany discovered a mass grave containing 34 skeletons. They included 9 adult males, 7 adult females and 16 children.
All of the skeletons showed signs of fatal trauma, including head wounds. None of them showed any signs of defensive wounds, suggesting they were killed whilst running away.
The Talheim Death Pit dates from the Stone Age, around 7,000 years ago. It offers some of the oldest evidence of organised group violence between two communities: that is, of war.
Clearly, humans have been fighting wars for thousands of years, and we may not be the only ones. There is growing evidence that several other species also engage in warfare, including our closest relatives the chimpanzees.
That suggests we have inherited our predilection for warfare from our ape-like ancestors. But not everyone agrees that warfare is inbuilt.`,
      question: "What is the main aim of the Reading Passage?",
      options: ["To present a few relics of people’s war that will be discussed further whether violence is innate or not", "Present standards of contemporary archaeology and its application", "To describe battling among various species", "Recommend methods of interpreting people’s violence"],
      answer: "To present a few relics of people’s war that will be discussed further whether violence is innate or not"
    },
    {
      id: 10,
      story: `In 1983, archaeologists in southern Germany discovered a mass grave containing 34 skeletons. They included 9 adult males, 7 adult females and 16 children.
All of the skeletons showed signs of fatal trauma, including head wounds. None of them showed any signs of defensive wounds, suggesting they were killed whilst running away.
The Talheim Death Pit dates from the Stone Age, around 7,000 years ago. It offers some of the oldest evidence of organised group violence between two communities: that is, of war.
Clearly, humans have been fighting wars for thousands of years, and we may not be the only ones. There is growing evidence that several other species also engage in warfare, including our closest relatives the chimpanzees.
That suggests we have inherited our predilection for warfare from our ape-like ancestors. But not everyone agrees that warfare is inbuilt.`,
      question: "The word “it” in paragraph 3 refers to…",
      options: ["Stone Age", "7,000 years ago", "Talheim Death Pit", "The oldest evidence"],
      answer: "Talheim Death Pit"
    },
    {
      id: 11,
      story: `In 1983, archaeologists in southern Germany discovered a mass grave containing 34 skeletons. They included 9 adult males, 7 adult females and 16 children.
All of the skeletons showed signs of fatal trauma, including head wounds. None of them showed any signs of defensive wounds, suggesting they were killed whilst running away.
The Talheim Death Pit dates from the Stone Age, around 7,000 years ago. It offers some of the oldest evidence of organised group violence between two communities: that is, of war.
Clearly, humans have been fighting wars for thousands of years, and we may not be the only ones. There is growing evidence that several other species also engage in warfare, including our closest relatives the chimpanzees.
That suggests we have inherited our predilection for warfare from our ape-like ancestors. But not everyone agrees that warfare is inbuilt.`,
      question: "What are the contents of mass graves found by archaeologists in southern Germany?",
      options: ["It contains 33 skeletons", "Remains of 34 dead animals", "Graveyard containing 9 adult males, 7 adult females and 16 children", "Relics of early civilization"],
      answer: "Graveyard containing 9 adult males, 7 adult females and 16 children"
    },
    {
      id: 12,
      story: `In 1983, archaeologists in southern Germany discovered a mass grave containing 34 skeletons. They included 9 adult males, 7 adult females and 16 children.
All of the skeletons showed signs of fatal trauma, including head wounds. None of them showed any signs of defensive wounds, suggesting they were killed whilst running away.
The Talheim Death Pit dates from the Stone Age, around 7,000 years ago. It offers some of the oldest evidence of organised group violence between two communities: that is, of war.
Clearly, humans have been fighting wars for thousands of years, and we may not be the only ones. There is growing evidence that several other species also engage in warfare, including our closest relatives the chimpanzees.
That suggests we have inherited our predilection for warfare from our ape-like ancestors. But not everyone agrees that warfare is inbuilt.`,
      question: "According to the text, for what reason do people battle?",
      options: ["Their inbuilt instinct is battling", "Because people acquired preference for fighting from their ape-like ancestors", "Since they have been battling wars of thousand of a long time", "Because humans' closest relatives, chimpanzees, are involved in warfare"],
      answer: "Because people acquired preference for fighting from their ape-like ancestors"
    },
    {
      id: 13,
      story: `You're running late for work and you've purchased your coffee in a hurry. Just as you arrive at the office, a jet of hot liquid escapes from the tiny hole in the lid, leaving you with hot beverage residue on your clothes before the day has really started.
This is exactly what happened to Rob Kaczmarek after buying a cup of his favourite caffeinated drink. The marketing director at Convergent Science was intrigued by why the coffee shoots out so far and therefore set about modelling this, initially as a joke for those who enjoy a bit of computational fluid dynamics. It's the design of the lid that's the problem, he explains.
"It happens because of the sloshing of the coffee against the lid, which is kind of unique. At the end of the lid, the hole is right up above that. As the coffee sloshes against the end of the lid, that velocity is amplified and it splashes up through the actual hole."
Not all coffee cups are designed with a hole, of course. Some have lids with a tiny hole and others peel back to reveal a much larger gap, which offsets the shooting jets of hot liquid.`,
      question: "What is the main reason for the spilled coffee incident?",
      options: ["Sloshing", "Quickness", "Slippery", "Design of the cup"],
      answer: "Sloshing"
    },
    {
      id: 14,
      story: `You're running late for work and you've purchased your coffee in a hurry. Just as you arrive at the office, a jet of hot liquid escapes from the tiny hole in the lid, leaving you with hot beverage residue on your clothes before the day has really started.
This is exactly what happened to Rob Kaczmarek after buying a cup of his favourite caffeinated drink. The marketing director at Convergent Science was intrigued by why the coffee shoots out so far and therefore set about modelling this, initially as a joke for those who enjoy a bit of computational fluid dynamics. It's the design of the lid that's the problem, he explains.
"It happens because of the sloshing of the coffee against the lid, which is kind of unique. At the end of the lid, the hole is right up above that. As the coffee sloshes against the end of the lid, that velocity is amplified and it splashes up through the actual hole."
Not all coffee cups are designed with a hole, of course. Some have lids with a tiny hole and others peel back to reveal a much larger gap, which offsets the shooting jets of hot liquid.`,
      question: "After you buy coffee, what kind of accident is likely to happen at work in the morning?",
      options: ["dizzy from caffeine", "soiling clothes with it", "accidentally spill it", "scalded from hot coffee"],
      answer: "soiling clothes with it"
    },
    {
      id: 15,
      story: `You're running late for work and you've purchased your coffee in a hurry. Just as you arrive at the office, a jet of hot liquid escapes from the tiny hole in the lid, leaving you with hot beverage residue on your clothes before the day has really started.
This is exactly what happened to Rob Kaczmarek after buying a cup of his favourite caffeinated drink. The marketing director at Convergent Science was intrigued by why the coffee shoots out so far and therefore set about modelling this, initially as a joke for those who enjoy a bit of computational fluid dynamics. It's the design of the lid that's the problem, he explains.
"It happens because of the sloshing of the coffee against the lid, which is kind of unique. At the end of the lid, the hole is right up above that. As the coffee sloshes against the end of the lid, that velocity is amplified and it splashes up through the actual hole."
Not all coffee cups are designed with a hole, of course. Some have lids with a tiny hole and others peel back to reveal a much larger gap, which offsets the shooting jets of hot liquid.`,
      question: "What is Rob Kaczmarek trying to explain to us?",
      options: ["He was genuinely interested in spilling coffee", "Coffee gush very far", "It is too hard to reach", "The lid design causes the coffee to spill"],
      answer: "The lid design causes the coffee to spill"
    },
    {
      id: 16,
      story: `You're running late for work and you've purchased your coffee in a hurry. Just as you arrive at the office, a jet of hot liquid escapes from the tiny hole in the lid, leaving you with hot beverage residue on your clothes before the day has really started.
This is exactly what happened to Rob Kaczmarek after buying a cup of his favourite caffeinated drink. The marketing director at Convergent Science was intrigued by why the coffee shoots out so far and therefore set about modelling this, initially as a joke for those who enjoy a bit of computational fluid dynamics. It's the design of the lid that's the problem, he explains.
"It happens because of the sloshing of the coffee against the lid, which is kind of unique. At the end of the lid, the hole is right up above that. As the coffee sloshes against the end of the lid, that velocity is amplified and it splashes up through the actual hole."
Not all coffee cups are designed with a hole, of course. Some have lids with a tiny hole and others peel back to reveal a much larger gap, which offsets the shooting jets of hot liquid.`,
      question: "The text above can be classified as…",
      options: ["Fictional", "Humorous", "Narrative", "Scientific"],
      answer: "Scientific"
    }
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
      return { ...state, answers: [], loading: false}
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