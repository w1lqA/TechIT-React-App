import React from 'react';
import SectionTitle from './SectionTitle';
import ButtonBlue from './Button';

function AboutSection() {
  return (
    <section id="about" className="bg-gray-300">
      <div>
        <SectionTitle sectionTitle={"About us"} sectionIcon={"question-circle"}/>
        <div className="mx-auto max-w-4xl py-12 lg:py-24">
          <div className='bg-[#161616] rounded-2xl shadow-2xl shadow-black border-2 border-[#303030] card p-3'>
            <p className="text-justify leading-8 text-xl text-gray-400 p-12 border-2 border-[#303030] rounded-2xl bg-black">
              <a href="#" className="text-blue-700 hover:text-blue-900">TechIT</a> is your one-stop destination for the latest news and products in the technology world! We cover <a href="#blog" className="text-blue-700 hover:text-blue-900">topics</a> such as artificial intelligence, blockchain, cloud computing, cybersecurity, and more.<br/>
              We also offer a range of high-quality <a href="#products" className="text-blue-700 hover:text-blue-900">products</a> that can help you enhance your personal and professional life.
              We hope you enjoy browsing our site and finding the news and products that suit your needs. Thank you for choosing TechIT!
              <ButtonBlue buttonTitle={"Discover our Products"} buttonHref={'#products'}/>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AboutSection;