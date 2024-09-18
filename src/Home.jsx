// src/components/Home.js
import React from 'react';
import photo from './assets/aman.jpeg';
const Home = () => (
  <div data-aos="fade-up">
    <div className='home'>
      <h1 style={{textDecoration: 'underline'}}>Welcome to my portfolio!</h1>
      <img className='photo' src={photo}></img>
    </div>
  </div>
);

export default Home;
