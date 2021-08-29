import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { remAnsw } from '../store/actions/quiz.action'

function FinalPage () {
  const history = useHistory()
  const dispatch = useDispatch()
  const { score } = useSelector(state => state)
  const endQuiz = () => {
    localStorage.setItem('quiz', JSON.stringify({
      status: 'finish'
    }))
    dispatch(remAnsw())
    history.push('/')
  }

  return (
    <>
    {
      score
    }
      <div className="container">
        <div>
          <h1>Mini Quiz Bahasa Inggriss Marshanda</h1>
            <div type="div" className="btn btn-sm btn-danger" onClick={_ => endQuiz()}>Start Again</div>
        </div>
      </div>
    </>
  )
}

export default FinalPage