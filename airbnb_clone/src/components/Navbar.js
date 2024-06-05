import React from 'react';
import images from '../airbnb 1.png';
export default function Navbar() {
    return (
        <nav>
            <img src={images} classname='nav--image' />
        </nav>

    );
}