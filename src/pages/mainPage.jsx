import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import LandingPage from '../assets/bg_1.jpg'

function MainPage () {
  const history = useHistory()

  const playQuiz = () => {
    localStorage.setItem('quiz', JSON.stringify({
      status: 'start',
      currentQuestion: 1
    }))
    history.push('/quiz')
  }


  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 align-self-center">
              <div style={{ marginLeft: "10%", marginTop: "10%" }}>
                <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}>Hi</h1>

                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}>
                  Welcome to English Mini QUIZ by <b> marshanda </b> built by love and creativity for you
                who need to practice your english skill, feel free to use :)
              </p>

              
              <Link>
                <div type="button" className="btn btn-light" onClick={_ => playQuiz()}
                  style={{ backgroundColor: "#CEE5D0", fontFamily: "Playfair Display, serif", fontWeight: 400 }}
                >Start Quiz !!!</div>
              </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 align-self-center">
              <img
                src={LandingPage}
                style={{
                  marginTop: "10%",
                  maxWidth: "100%",
                  height: "auto"
                }}
                alt="landing page"
              ></img>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage