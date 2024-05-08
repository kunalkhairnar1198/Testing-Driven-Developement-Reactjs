import React, { useState } from 'react'
import Output from './Output'

const Greeting = () => {
  const [changeText, setChangeText] = useState(false)

  const chagneTextHandler =()=>{
    setChangeText(true)
  }
  
  return (
    <div>
        <h2>hello world!</h2>
        {/* <p>It's good to see you!</p> */}
        {!changeText && <Output>It's good to see you!</Output>}
        {changeText && <Output>Changed!</Output>}
        <button onClick={chagneTextHandler}>Change Text!</button>
    </div>
  )
}

export default Greeting
