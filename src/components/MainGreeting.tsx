import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function MainGreeting() {

  let navigate = useNavigate()
  useEffect(() => {
    window.onload = function () {
      navigate("/")
    };
  }, [navigate]);





  return (

    <div className='main-greeting'>
      <h1 className='main-greeting-text'>Hi,<br/>I´m  &nbsp;&nbsp;&nbsp;ablo,<br/> fullstack developer</h1>      
      <h1 className='main-greeting-P'>P</h1>
    </div>
  )
}

export default MainGreeting