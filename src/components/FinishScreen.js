import React from 'react'

const FinishScreen = ({points, maxPossiblePoints, highscore, dispatch}) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
    <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}
        (
            {Math.ceil(percentage)}%
        )
    </p>
    <p className="highscore">
      (Highscore: {highscore} points)
    </p>
    
    <button className="btn btn-ui" onClick={() => {return dispatch({ type : 'reset'})}}>restart</button> 
    </>
  )
}
export default FinishScreen
