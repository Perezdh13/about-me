import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    
    let navigate = useNavigate()
    useEffect(() => {
        window.onload = function () {
            navigate("/")
        };
    }, [navigate]);


    return (
        <div className='contact-page'>
            <div className='contact-page-headlineText'>
                <h1>Contact Me</h1>
                <h3>I am interested in any project, especially in large software development projects,
                    and applications.For any questions, queries or offers, please fill out the form</h3>
            </div>
            <div className='contact-page-input'>
                <input className='contact-page-input-name' type='text' name='Name' placeholder='Name' />
                <input className='contact-page-input-email' type='text' name='Email' placeholder='Email' />
                <input className='contact-page-input-subject' type='text' name='Subject' placeholder='Subject' />
                <input className='contact-page-input-message' type='text' name='Message' placeholder='Message' />
                <button className='contact-page-input-button' >Send message!</button>
            </div>
            <div className='contact-page-map'>
            </div>
        </div>
            
    )
}

export default Contact