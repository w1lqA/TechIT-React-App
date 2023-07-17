import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-scroll';

function Footer() {
    const linkProps = {
        duration: 500,
        smooth: true,
    }
    return (
    <footer className="text-white py-8 gradient-black border-t-2 border-[#161616]">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 grid-cols-1 grid-rows-3 lg:grid-rows-1 items-center">
        <nav className="mt-4 md:mt-0 mx-auto lg:ml-auto lg:mx-0">
            <ul className="flex space-x-4">
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
        <div className="max-w-7xl mx-auto">
            <ul className="space-x-8 py-6 flex justify-center">
                <a href="https://www.linkedin.com/in/w1lqa/"><FontAwesomeIcon icon={faLinkedin} className='text-white hover:text-gray-400 transition transform duration-300 hover:ease-out w-10 sm:w-max' color='white' size='3x'/></a>
                <a href="https://t.me/w1lqA"><FontAwesomeIcon icon={faTelegram} className='text-white hover:text-gray-400 transition transform duration-300 hover:ease-out w-10 sm:w-max' size='3x'/></a>
                <a href="https://github.com/w1lqA"><FontAwesomeIcon icon={faGithub} className='text-white hover:text-gray-400 transition transform duration-300 hover:ease-out w-10 sm:w-max' color='white' size='3x'/></a>
            </ul>
            <hr className="border border-white rounded-full my-3 mx-3"/>
            <Link {...linkProps} id="navlogo" to='welcome' className="flex justify-center text-4xl mt-6 text-center font-bold text-[#cff800] hover:text-[#cff80083]">
                TechIT
            </Link>
        </div>
        <p className="mx-auto text-center lg:mr-auto lg:mx-0">&copy; 2023 TechIT. All rights reserved. Developed by <a className="text-[#cff800] hover:text-[#cff80083]" href="https://github.com/w1lqA" >w1lqA</a></p>
        </div>
    </footer>
    );
}

export default Footer