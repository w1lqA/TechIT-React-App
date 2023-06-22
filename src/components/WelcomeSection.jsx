import React from "react";
import ButtonBlue from "./Button";

function WelcomeSection() {
  return (
    <section id="welcome" className="pt-16 mt-8 md:mt-0 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:text-center]">
          <h2 className="text-5xl text-center font-extrabold text-gray-300">Welcome to <span className="text-[#cff800]">TechIT!</span></h2>
          <p className="mt-4 text-center max-w-4xl text-xl text-gray-400 lg:mx-auto">
            Explore our topics on software, hardware, gadgets, gaming, cybersecurity, and more. Subscribe to our newsletter to get the latest updates. <br /> Thanks for visiting TechIT and enjoy your stay!
          </p>
          <ButtonBlue buttonTitle={"More about us"} buttonHref={'#about'}/>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;