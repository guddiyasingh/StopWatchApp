import React, { useState } from 'react'

const Stopwatch = () => {

  const[time, setTime] = useState({hr:0, min:0, sec:0 , milli:0})



  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;
  return (
   
    <div className="container">
      <h1>{time.hr+ " : " +time.min+ " : " +time.sec+ " : " +time.milli}</h1>
       <div className="button">
        <button className='start' onClick={start}>Start</button>
        <button className="stop" >Stop</button>
        <button className="reset">Reset</button>
       </div>
    </div>
  )
}

export default Stopwatch
