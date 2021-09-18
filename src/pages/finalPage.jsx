import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { remAnsw } from '../store/actions/quiz.action'
import Final from '../assets/final.jpg'
import { Link } from 'react-router-dom'
import ParticlesBg from 'particles-bg'

function FinalPage () {
  const history = useHistory()
  const dispatch = useDispatch()
  const { score, corrections } = useSelector(state => state)
  const endQuiz = () => {
    localStorage.setItem('quiz', JSON.stringify({
      status: 'finish'
    }))
    dispatch(remAnsw())
    history.push('/')
  }

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 align-self-center">
              <img
                src={Final}
                style={{
                  marginTop: "10%",
                  maxWidth: "100%",
                  height: "auto"
                }}
                alt="landing page"
              ></img>
            </div>

            <div className="col-lg-6 col-md-6 align-self-center">
              <div style={{ marginLeft: "10%", marginTop: "10%" }}>
                <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}>Hi</h1>

                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}>
                  {score < 80 ? 
                    <p> Congratulations, you have finished this quiz your final score is <b> { score } </b> keep learning.</p>:
                    <p> You are great, keep up your good works <b> {score} </b> </p>
                  }
                </p>

                <Link>
                  <div type="button" className="btn btn-light mb-2" onClick={_ => endQuiz()}
                    style={{ backgroundColor: "#CEE5D0", fontFamily: "Playfair Display, serif", fontWeight: 400 }}
                  >Start Again</div>
                </Link>


                { corrections.length > 0 ?
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Number</th>
                      <th scope="col">Correct Answers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {corrections.map((item, i) => {
                      return (
                      <tr key={i}>
                        <th scope="row">{item[0]}</th>
                        <td>{item[1]}</td>
                      </tr>   
                      )                 
                      }) 
                    }
                </tbody>
                </table>
                : ""
                }

                
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <ParticlesBg color="#79B4B7" type="cobweb" bg={true} />
    </>
  )
}

export default FinalPage