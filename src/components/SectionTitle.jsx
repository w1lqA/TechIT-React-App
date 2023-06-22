import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, faEnvelope, faStar, faBook, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faQuestionCircle, faEnvelope, faStar, faBook, faShoppingCart);

function SectionTitle(props) {
    return (
        <div className={`section-title border-y-2 border-[#161616] text-gray-300 flex flex-row justify-center space-x-3 shadow-md gradient-black`}>
            <FontAwesomeIcon icon={props.sectionIcon} size='2x' className='my-auto text-[#b3d700]'/>
            <h2 className="text-5xl text-center font-bold py-10">{props.sectionTitle}</h2>
        </div>
    );
};

export default SectionTitle;