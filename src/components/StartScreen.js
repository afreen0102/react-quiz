import React from 'react'
import {useQuiz} from '../contexts/QuizContext';

const StartScreen = () => {

  const {numQuestions, dispatch} = useQuiz();
  return (
    <div className='start'>
      <h2>Welcome To The React Quiz</h2>
      <h3>
        {numQuestions} questions to test your react mastery
      </h3>
      <button className="btn btn-ui" onClick={() => dispatch({ type: 'start'})}>Let's Start</button>
    </div>
  )
}

export default StartScreen
