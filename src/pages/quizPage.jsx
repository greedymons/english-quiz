import React from 'react'
import Card from '../components/card'
import { useSelector } from 'react-redux'


function QuizPage() {
  const { questions, answers } = useSelector(state => state)

  return (
    <>
      <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 400}}>
      <div className="container mb-5 d-flex justify-content-center" style={{marginTop:"5%", display:'inline-block'}}>
        <Card data={questions[answers.length]}/>
      </div>
    </div>

    
    </>
  )
}

export default QuizPage