import React from "react";

function BlogCard(props){
    return(
        <div className={`rounded-2xl border card border-[#303030] bg-gray-100 p-3 shadow-black hover:shadow-gray-800 shadow-2xl ${props.adaptiveGridClass}`}>
            <div className="flex flex-col h-full p-6 rounded-2xl bg-white border border-[#303030]">
                <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4">
                        {props.blogTitle}
                    </h3>
                   
                    
                    <p className="text-gray-600 leading-relaxed">
                    {props.blogDescription}
                    </p>
                    
                </div>
                <div className="mt-auto">
                    
                    <a href="#" className="text-blue-500 font-bold hover:text-blue-700 my-4 inline-block">
                        Read More
                    </a>
                    <img src={props.blogImage} alt="" className="rounded-2xl border border-[#303030]" />
                </div>
            </div>
        </div>
    );
}

export default BlogCard;