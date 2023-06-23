import React, { useState } from "react";
import Modal from "../Modal";

import Product1Img from "../../assets/product1.png"
import Product2Img from "../../assets/product2.png"
import Product3Img from "../../assets/product3.png"

function Product(props){
    const [modals, setModal1] = useState([
        {modalID: 'Modal1', 
        modalImage: Product1Img,
        modalTitle: 'TechShield Security Suite', 
        modalDescription: `TechShield Security Suite is a powerful solution for protecting your data from hackers and malware. It encrypts your data, verifies your identity, and monitors your network for threats. With TechShield, you can:<br/>
        <strong>• Encrypt</strong> your files, folders, emails, and messages with advanced algorithms.<br/>
        <strong>• Authenticate</strong> yourself with passwords, PINs, biometrics, or tokens.<br/>
        <strong>• Monitor</strong> your network and devices for malicious activity and block it.<br/>
        TechShield is easy to use and compatible with your existing software and hardware. You can also customize it to fit your needs. TechShield Security Suite is the best way to keep your data safe and private. Get it now and enjoy peace of mind.`
        },

        {modalID: 'Modal2', 
        modalImage: Product2Img,
        modalTitle: 'CodeMaster IDE', 
        modalDescription: `CodeMaster IDE is a cutting-edge integrated development environment designed to revolutionize your coding experience. With its robust features and intuitive interface, it empowers developers to reach new heights of productivity. Discover the possibilities with CodeMaster IDE:<br/>
            <strong>• Harness</strong> the power of intelligent code completion, making coding faster and more accurate.<br/>
            <strong>• Seamlessly integrate</strong> version control into your workflow, ensuring efficient collaboration and effortless tracking of changes.<br/>
            <strong>• Collaborate</strong> with ease by leveraging CodeMaster IDE's seamless collaboration tools, enabling real-time code sharing and synchronized development.<br/>
            CodeMaster IDE is designed to be user-friendly and seamlessly integrates with your existing software and tools. Adapt it to your preferences and coding style effortlessly. Take your coding prowess to the next level with CodeMaster IDE and unlock your full potential. Get started now and revolutionize the way you code.`
        },

        {modalID: 'Modal3', 
        modalImage: Product3Img,
        modalTitle: 'DataHub Analytics Platform', 
        modalDescription: `DataHub Analytics Platform is a comprehensive solution for unlocking the hidden potential of your data. It empowers businesses to gain valuable insights, make informed decisions, and drive growth. Explore the capabilities of DataHub Analytics Platform:<br/>
            <strong>• Visualize</strong> complex data sets effortlessly with advanced data visualization tools, allowing you to identify trends and patterns at a glance.<br/>
            <strong>• Leverage</strong> powerful machine learning algorithms to analyze vast amounts of data, providing valuable predictive and prescriptive insights.<br/>
            <strong>• Seamlessly integrate</strong> data from various sources, enabling a holistic view and facilitating data-driven decision-making.<br/>
            DataHub Analytics Platform is designed to be user-friendly and adaptable to your unique business needs. It seamlessly integrates with your existing data infrastructure, making implementation smooth and hassle-free. Unleash the full potential of your data with DataHub Analytics Platform and embark on a journey of data-driven success. Get started today and transform the way you analyze and utilize your data.`
        },
    ]);    

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflowY = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflowY = 'scroll';
    };

    return(
        <div className={`rounded-2xl card mx-auto border p-3 hover:shadow-gray-800 border-[#303030] max-w-[30rem] shadow-black shadow-2xl sm:max-w-none bg-gray-100 ${props.adaptiveGridClass}`}>
            <div className="flex flex-col h-full p-6 border border-[#303030] card rounded-2xl bg-white">
                <div className="flex-grow">
                    <img src={props.productImage} alt="Product 1" className="mb-4 rounded-2xl border border-[#303030]" />
                    <h3 className="text-xl font-semibold mb-2">{props.productName}</h3>
                    <p className="text-gray-600 mb-4">{props.productDescription}</p>
                </div>
                <div className="mt-auto">
                    <button onClick={openModal} className="bg-[#b3d700] shadow-2xl shadow-[#b3d700ac] hover:bg-[#859e0b] border border-[#303030] text-gray-100 py-2 px-4 font-regular bold rounded-xl inline-block">
                    See more...
                    </button>
                </div>
            </div>
            { isModalOpen && props.modalName==='Modal1' &&(
            <Modal onClose={closeModal} modal={modals[0]}/>
            )}
            { isModalOpen && props.modalName==='Modal2' &&(
            <Modal onClose={closeModal} modal={modals[1]}/>
            )}
            { isModalOpen && props.modalName==='Modal3' &&(
            <Modal onClose={closeModal} modal={modals[2]}/>
            )}
        </div>
    );
}
export default Product;