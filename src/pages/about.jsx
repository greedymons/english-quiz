import React from 'react'
import { Link } from 'react-router-dom'
import marshanda_safa_nabilah from '../assets/marshanda_safa_nabilah.jpeg'
import ParticlesBg from 'particles-bg'

function About() {

  return (
    <>
      <div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-7 col-md-6 align-self-center">
              <div style={{ marginLeft: "10%", marginTop: "10%" }}>
                <h1 style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}>Hi</h1>

                <p style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}>
                  My name is <b> marshanda </b> i'm apparently studying in Universitas Airlangga (UNAIR) Surabaya.
                  This is my first project to provide some of questions from me. This App built by my brother <b> </b>
                  <b>
                    <Link to={{ pathname: "https://romizaki.netlify.com" }} target="_blank" style={{textDecoration:"none"}}>
                      Romi Zaki.
                    </Link>
                    <b></b>
                  </b> if you have any thoughts, suggestions, or anything about this project please contact me on. 
                  <b> marshandasf21@gmail.com  </b>
              </p>
              </div>
            </div>

            <div className="col-lg-5 col-md-6 d-flex align-items-center">
              <img
                src={marshanda_safa_nabilah}
                style={{
                  marginTop: "10%",
                  maxWidth: "90%",
                  borderRadius: "50%"
                }}
                alt="landing page"
              ></img>
            </div>

          </div>
        </div>
      </div>
      <ParticlesBg color="#79B4B7" type="cobweb" bg={true} />
    </>
  )
}

export default About