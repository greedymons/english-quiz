import React from 'react'
import Card from '../components/card'
import { useSelector, useDispatch } from 'react-redux'


function QuizPage() {
  const dispatch = useDispatch()
  const { questions, loading, error } = useSelector(state => state)

  const num = JSON.parse(localStorage.getItem('quiz')).currentQuestion
  console.log(num,"<<<<<<");
  return (
    <>
      <h1>Helooo world from quiz page</h1>
      <div className="container">
        <Card data={questions[num-1]} />
      </div>
    </>
  )
}

export default QuizPage