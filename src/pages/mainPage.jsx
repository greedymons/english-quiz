import React from 'react'
import { Link } from 'react-router-dom'

function MainPage () {

  const playQuiz = () => {
    console.log('masukkk');
    localStorage.setItem('quiz', JSON.stringify({
      status: 'start',
      currentQuestion: 1
    }))
  }

  return (
    <>
      <div className="container">
        <div>
          <h1>Mini Quiz Bahasa Inggriss Marshanda</h1>
          <Link to="/quiz">
            <button type="button" className="btn btn-info" onClick={_ => playQuiz()}>Start</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MainPage