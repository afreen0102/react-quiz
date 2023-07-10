import React from 'react'
import {useQuiz} from '../contexts/QuizContext';

const Options = ({question}) => {

  const {dispatch, answer} = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
    {
    question.options.map((option, index) => (
        <button 
        onClick={() => dispatch({ type: 'newAnswer', payload: index })} 
        className={`btn btn-option ${index === answer ? 'answer' : ''} ${ hasAnswered ? index === question.correctOption ? 'correct' : 'wrong' : "" } `} 
        key={option}
        disabled={hasAnswered}
        >
            {option}
        </button>) )
    }
      </div>
  )
}

export default Options
