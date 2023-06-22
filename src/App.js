import {React, useState} from 'react';
import './App.css';

import WelcomeSection from './components/WelcomeSection';
import ProductsSection from './components/ProductsSection';
import Header from './components/Header';
import ReviewsSection from './components/ReviewsSection';
import BlogSection from './components/BlogSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';



function App() {


  return (
    <div className="App">
      <Header/>
      <WelcomeSection/>
      <ProductsSection/>
      <BlogSection/>
      <ReviewsSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default App;
