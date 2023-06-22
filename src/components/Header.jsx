import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const[isTogglerOn, setIsTogglerOn] = useState(false)

    const togglerOn = () => {
        setIsTogglerOn(true);
    }
    const togglerOff = () => {
        setIsTogglerOn(false);
    }
    
    return (
    <header id="header" className="py-4 fixed top-0 left-0 w-full z-50 gradient-black border-b-2 border-[#161616]">
        <div className="container mx-auto flex justify-between items-center px-4">
            <a id="navlogo" href="#" className="text-5xl font-bold text-[#cff800] hover:text-[#cff80083]">
                TechIT
            </a>
            <nav>
                <ul id="navbar" className={`text-gray-300 md:space-x-4 text-xl md:flex md:flex-row flex-col justify-between ${!isTogglerOn ? 'hidden' : 'flex'}`}>
                <li>
                    <a href="#" className="font-bold text-[#cff800] hover:text-[#cff80083]">Home</a>
                </li>
                <li>
                    <a href="#products">Products</a>
                </li>
                <li>
                    <a href="#blog">Blog</a>
                </li>
                <li>
                    <a href="#reviews">Reviews</a>
                </li>
                <li>
                    <a href="#about">About Us</a>
                </li>
                </ul>
            </nav>
            <div className="md:hidden flex">
                {isTogglerOn && (
                    <button onClick={togglerOff} className="text-[#b3d700] hover:text-[#b3d700b9] text-3xl flex transition transform duration-300 hover:ease ">
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                )}
            
                {!isTogglerOn && (
                    <button onClick={togglerOn} className="text-[#b3d700] hover:text-[#b3d700b9] text-3xl flex transition transform duration-300 hover:ease">
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                )}
            </div>
        </div>
    </header>
    );
}

export default Header;