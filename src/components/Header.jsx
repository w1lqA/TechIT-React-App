import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


function Header() {
    const[isTogglerOn, setIsTogglerOn] = useState(false)

    const togglerOn = () => {
        setIsTogglerOn(true);
    }
    const togglerOff = () => {
        setIsTogglerOn(false);
    }
    const linkProps = {
        duration: 500,
        smooth: true,
    }
    return (
    <header id="header" className="py-4 fixed top-0 left-0 w-full z-50 gradient-black border-b-2 border-[#161616]">
        <div className="container mx-auto flex justify-between md:items-center items-start px-4">
            <Link {...linkProps} to='welcome' id="navlogo"  className=" text-5xl font-bold text-[#cff800] hover:text-[#cff80083] mr-2">
                TechIT
            </Link>
            <div className='flex flex-row space-x-12'>
                <nav>
                    <ul id="navbar-list" className={`text-gray-300 md:space-x-4 text-xl md:flex md:flex-row flex-col justify-between ${!isTogglerOn ? 'hidden' : 'flex'}`}>
                        <li>
                            <Link to='welcome' {...linkProps} className="font-bold text-[#cff800] hover:text-[#cff80083]">Home</Link>
                        </li>
                        <li>
                            <Link to='products' {...linkProps}>Products</Link>
                        </li>
                        <li>
                            <Link to='blog' {...linkProps}>Blog</Link>
                        </li>
                        <li>
                            <Link to='reviews' {...linkProps}>Reviews</Link>
                        </li>
                        <li>
                            <Link to='about' {...linkProps}>About Us</Link>
                        </li>
                    </ul>
                </nav>
                <div id='navtoggler' className="md:hidden flex mt-2">
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
        </div>
    </header>
    );
}

export default Header;