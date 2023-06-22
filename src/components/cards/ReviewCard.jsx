import React from "react";

function ReviewCard(props){
    return(
    <div className="rounded-2xl card md:col-span-2 lg:col-span-1 bg-gray-100 border border-[#303030] p-3 shadow-gray-500 shadow-2xl">
        <div className="px-4 py-5 sm:p-6 flex flex-col h-full p-6 border bg-white border-[#303030] card rounded-2xl ">
            <div className="flex-grow">
                <blockquote className="mb-4">
                <div className="text-lg font-normal italic text-gray-500">
                    {props.reviewText}
                </div>
                </blockquote>
            </div>
            <div className="flex items-center">
                <img src={props.reviewPhoto} alt="User 1" className="rounded-full h-12 w-12 mr-2 card border border-[#303030]" />
                <div className="text-base font-medium text-gray-900">
                {props.reviewName}
                </div>
            </div>
        </div>
    </div>
    );
}

export default ReviewCard;