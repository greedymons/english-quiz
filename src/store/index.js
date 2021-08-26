import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import quizReducer from './reducers/quiz.reducer'
import logger from './middleware'

const rootReducer = quizReducer

const store = createStore(rootReducer, applyMiddleware(logger, thunk))
export default store;