import React from 'react';
import web from '../images/img3.png';
import Common from './Common';

export const About = () => {
  return (
    <>
        <Common 
        name="Welcome to About Page" 
        imgsrc={web} 
        visit="./contact"
        btname="Contact Now"
        />
    </>
  );
}

export default About;
