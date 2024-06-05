
import React from 'react';
import '../index.css';
import image from '../image.png';
import Content from './Contents';
import Footer from './Footer';
export default function Info(){
    return (
        <div className='card'>
        <div className='img'><img src={image}/></div>
        <Content/>
        <Footer/>
        </div>
    )
}

