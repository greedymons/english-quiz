import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'


function QuizPage() {
  const { questions, answers, loading, error } = useSelector(state => state)

  return (
    <>
      <h1>Helooo world from quiz page</h1>
      {
        JSON.stringify(answers)
      }
      <div className="container">
        <Card data={questions[answers.length]} />
      </div>
    </>
  )
}

export default QuizPage