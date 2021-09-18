import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#5E454B" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>English Quiz</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to={"/"}>Home</Link>
              <Link className="nav-item nav-link" to={"/about"}>About Me</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar