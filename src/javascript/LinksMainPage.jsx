import React from 'react'
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';

function LinksMainPage() {
    return (
        <div className='main-page-bar-links'>
            <div className='main-page-bar-links-P'>
                <p>About</p>
                <p>My Skills</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <img className='main-page-bar-linkedin' src={linkedin} />
            <img className='main-page-bar-github' src={github} />
        </div>
    )
}

export default LinksMainPage