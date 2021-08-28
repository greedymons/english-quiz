import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAnsw } from '../store/actions/quiz.action'

function Card(props) {
  const quizStatus = JSON.parse(localStorage.getItem('quiz'))
  const dispatch = useDispatch();
  const [actions, setActions] = useState({
    option: "",
    buttonStatus: false,
    questionStatus: "",
    temp: ""
  })

  const [numQues, setNumQues] = useState(quizStatus.currentQuestion)

  const chooseOption = (e) => {
    let { value } = e.target
    setActions({ ...actions, option:value })
  }
  const submitAns = () => {
    console.log("HARA");
    if (actions.option !== "") {
      setNumQues(numQues + 1)
      dispatch(addAnsw(actions.option))
      setActions({ ...actions, option: "" })
    }
  }

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
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={props.data.options[0]} onChange={chooseOption}/>
            <label className="form-check-label" htmlFor="gridRadios1">
              {props.data.options[0]}
            </label>
          </div>
          
          <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value={props.data.options[1]} onChange={chooseOption}/>
            <label className="form-check-label" htmlFor="gridRadios2">
              {props.data.options[1]}
            </label>
          </div>

          <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value={props.data.options[2]} onChange={chooseOption}/>
            <label className="form-check-label" htmlFor="gridRadios3">
              {props.data.options[2]}
            </label>
          </div>

          <div className="form-check">
                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value={props.data.options[3]} onChange={chooseOption}/>
            <label className="form-check-label" htmlFor="gridRadios4">
              {props.data.options[3]}
            </label>
          </div>
          
        </div>
      </div>

      </div>
        {
          actions.option === "" ?
            <button type="submit" className="btn btn-primary btn-sm" disabled>HMMM</button>
          :
            <div type="submit" onClick={submitAns} className="btn btn-primary btn-sm">NEXT QUESTION</div>
        }
        <div className="card-footer text-muted text-end">
          2 days ago
        </div>
      </div>
    </>
  )
}

export default Card