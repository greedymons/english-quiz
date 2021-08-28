import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'


function QuizPage() {
  const { questions, answers } = useSelector(state => state)

  return (
    <>
      <div className="container" style={{marginTop:"5%"}}>
        <Card data={questions[answers.length]}/>
      </div>
    </>
  )
}

export default QuizPage