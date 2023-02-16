import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import background from '../img/Fondo pagina.png';


function LinksMainPage() {
    return (

        <div className='main-page'>
            <img className='main-page-background' src={background} alt='background'/>
            <div className='main-page-bar'>
                <div className='main-page-bar-icon'>
                    <Link to="/">
                    <h1>P</h1>
                    </Link>
                    <p className='main-page-bar-icon-pablo'>  Pablo</p>
                    <p className='main-page-bar-icon-webDeveloper'>  Web Developer</p>
                </div>
            </div>
            <div className='main-page-bar-links'>
                <div className='main-page-bar-links-P'>
                    <Link to="/About">
                        <p>About</p>
                    </Link>
                    <Link to="/Skills">
                    <p>My Skills</p>
                    </Link>
                    <Link to="/Projects">
                    <p>Projects</p>
                    </Link>
                    <Link to="/Contact">
                    <p>Contact</p>
                    </Link>
                </div>
                <a href='https://www.linkedin.com/in/pablopg91/'><img className='main-page-bar-linkedin' src={linkedin} alt='linkedin' /></a>
                <a href="https://github.com/Perezdh13"><img className='main-page-bar-github' src={github} alt='github' /></a>
            </div>
        </div>
    )
}

export default LinksMainPage