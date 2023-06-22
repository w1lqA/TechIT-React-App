import React from 'react';

function ButtonBlue(props){
    return (
        <div className={`flex justify-center mt-12`}>
            <a href={props.buttonHref} className={`bg-[#b3d700] shadow-2xl shadow-[#b3d7005b] text-gray-100 px-6 py-3 rounded-xl font-bold tracking-wide hover:bg-[#b3d700b9] `}>
                {props.buttonTitle}
            </a>
        </div>
    );
};

export default ButtonBlue;