import React from 'react';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export default function Content() {
    return (
        <div className='content'>
            <h3 className='name'>Pooja R</h3>
            <p className='desig'>Full-Stack developer</p>
            <p className='website'>poojar.website</p>
            <div className='buttons'>
                <button className='email_btn'>
                    <FontAwesomeIcon icon={faEnvelope} className='mail--icon' />
                    Email</button>
                <button className='linkedIn_btn'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='linkedin-icon-white-blue' />
                    LinkedIn</button>
            </div>
            <div className='about_interests'>
                <h4>About</h4>
                <p>I am a full stack developer with a particular interest in making things simple and automating daily tasks.
                    I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h4>Interests</h4>
                <p>Food expert. Music scholar. 
                    Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}