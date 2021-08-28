import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  const [options] = useState(props.data.options)
  console.log(options,"???????????");
  return (
    <>
      <div className="card container" style={{width:"65%"}}>
        <div className="card-header text-end">
          Question Number {props.data.id}
        </div>
      <div className="card-body">
        {
          props.data.story ? <p className="card-text">{props.data.story}</p> : ""
        }

        <h5 className="card-title">{props.data.question}</h5>
   
      <div className="row">
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
            <label className="form-check-label" for="gridRadios1">
              {options[0]}
            </label>
          </div>
          
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
            <label className="form-check-label" for="gridRadios2">
              {options[1]}
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
            <label className="form-check-label" for="gridRadios3">
              {options[2]}
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
            <label className="form-check-label" for="gridRadios4">
              {options[3]}
            </label>
          </div>
          
        </div>
      </div>

      </div>
        <Link to={"/"} className="btn btn-primary btn-sm">Go somewhere</Link>
        <div className="card-footer text-muted text-end">
          2 days ago
        </div>
      </div>
    </>
  )
}

export default Card