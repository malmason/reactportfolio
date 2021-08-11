import React from 'react';
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='headings'>
        <h1 className='lg-heading'>Malcolm <span className='text-secondary'>Mason</span></h1>
        <h2 className='sm-heading'>Full Stack Web Developer, Programmer, Database Analyst</h2>
      </div>
    </div>
  )
}

export default HeroSection
