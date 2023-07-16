import React from 'react';
import { Link } from 'react-scroll';
function ButtonBlue(props){
    const linkProps = {
        duration: 500,
        smooth: true,
    }
    return (
        <div className={`flex justify-center mt-12`}>
            <Link {...linkProps} to={props.buttonHref} className={`bg-[#b3d700] shadow-2xl shadow-[#b3d7005b] sm:px-6 sm:text-xl text-lg text-gray-100 px-3 py-3 rounded-xl font-semibold text-center tracking-wide hover:bg-[#b3d700b9] `}>
                {props.buttonTitle}
            </Link>
        </div>
    );
};

export default ButtonBlue;