import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addAnsw, changeLoad, correction } from '../store/actions/quiz.action'

function Card(props) {
  const { questions, loading } = useSelector(state => state)
  const dispatch = useDispatch();
  const history = useHistory();
  const [actions, setActions] = useState({
    option: "",
    buttonStatus: false,
    questionStatus: ""
  })
  
  const quizStatus = JSON.parse(localStorage.getItem('quiz'))
  const [numQues, setNumQues] = useState(quizStatus.currentQuestion)

  const chooseOption = (e) => {
    let { value } = e.target
    setActions({ ...actions, option:value })
  }
  function loadSkeleteon() {
    dispatch(changeLoad(false))
  }
  const submitAns = () => {
    if (actions.option !== "" && numQues < questions.length) {
      setNumQues(numQues + 1)
      dispatch(addAnsw(actions.option))
      setActions({ ...actions, option: "" })
      setTimeout(loadSkeleteon, 500)
    } else if (actions.option !== "") {
      dispatch(addAnsw(actions.option))
      setActions({ ...actions, option: "" })
      dispatch(correction())
      history.push('/finish')
    }
  }

  

  return (
    <>
      <div className="card-header text-black" style={{ width: "65%", backgroundColor: "#F3F0D7"}}>
        <div className="card-header text-end">
          {
            loading ? <Skeleton height={18} /> : <div>Question Number {props.data.id}</div>
          }
          </div>
      {
          loading ? <Skeleton count={7}/> :
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
      }
        {
          actions.option === "" ?
            <button type="submit" className="btn btn-primary btn-sm mb-2" style={{ backgroundColor: "#185ADB" }} disabled>SUBMIT</button>
          :
            <div type="submit" onClick={submitAns} className="btn btn-primary btn-sm mb-2" style={{ backgroundColor: "#185ADB" }} >SUBMIT</div>
        }
        <div className="card-footer text-muted text-end">
          {
            loading ? <Skeleton /> : <div> {questions.length - props.data.id} remaining questions </div>
          }
        </div>
      </div>
    </>
  )
}

export default Card