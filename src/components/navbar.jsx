import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>Home</Link>
              <Link className="nav-item nav-link" to={"/"}>Add New Movie</Link>
              <Link className="nav-item nav-link" to={"/"}>Movies</Link>
              <Link className="nav-item nav-link" to={"/"}>Series</Link>
              <Link className="nav-item nav-link" to={"/"}>Favourites</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar