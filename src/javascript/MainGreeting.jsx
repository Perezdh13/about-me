import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import P from '../img/P mayuscula.png';

function MainGreeting() {

  let navigate = useNavigate()
  useEffect(() => {
    window.onload = function () {
      navigate("/")
    };
  }, [navigate]);





  return (

    <div className='main-greeting'>
      <h1>Hi,<br/>I´m  &nbsp;&nbsp;&nbsp;ablo,<br/> fullstack developer</h1>
      <img src={P} alt='P mayuscula'/>
    </div>
  )
}

export default MainGreeting