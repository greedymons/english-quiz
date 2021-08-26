import React from 'react'
import Card from '../components/card'
import { useSelector, useDispatch } from 'react-redux'


function QuizPage(params) {
  const dispatch = useDispatch()
  const { questions, loading, error } = useSelector(state => state)

  return (
    <>
      <h1>Helooo world from quiz page</h1>
      {
        JSON.stringify(questions)
      }
      <h2>wkwkwk</h2>
      <Card />
    </>
  )
}

export default QuizPage