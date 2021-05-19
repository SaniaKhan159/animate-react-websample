import React from 'react';
import web from '../images/img2.png';
import Common from './Common';

export const Home = () => {
  return (
    <>
      <Common 
      name="Grow your business with" 
      imgsrc={web} 
      visit="./services"
      btname="Get Started"
      />
    </>
  );
}

export default Home;
