import React from 'react';
import background from '../img/Fondo pagina.png';
import bigInitial from '../img/P mayuscula.png';
import LinksMainPage from './LinksMainPage';

function MainPage() {
  return (
    <div className='main-page'>
      <img className='main-page-background' src={background} />
      <div className='main-page-bar'>
        <div className='main-page-bar-icon'>
          <img src={bigInitial} />
          <p>Pablo<br />Web Developer</p>
        </div>
        
      </div>
        <LinksMainPage />
        
    </div>
  )
}

export default MainPage