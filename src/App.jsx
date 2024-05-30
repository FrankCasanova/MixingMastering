import React from 'react'
import { useEffect } from "react";
import clickMenuSound from './assets/sounds/clickMenu.mp3';
import clickButtonSound from './assets/sounds/clickButton.mp3';
import backGroundMusic from './assets/sounds/backGroundMusic.mp3';
import { Footer, Header, WhatIaWebpage, Features, Possibility, Blog } from './containers';
import { Brand, Cta, Navbar } from './components';

import './App.css'


const App = () => {
  useEffect(() => {
    const playSound = (event) => {
      const audio = new Audio();
      audio.volume = 0.5;

      if (event.target.tagName === 'A') {
        audio.src = clickMenuSound;
      } else if (event.target.tagName === 'BUTTON') {
        audio.src = clickButtonSound;
      } else {
        return; // Do nothing if it's not an anchor or button
      }

      audio.play();
    };

    document.addEventListener('click', playSound);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', playSound);
    };
  }, []);

  useEffect(() => {
    const backgroundMusic = new Audio(backGroundMusic);
    backgroundMusic.volume = 0.2; // Adjust the volume as needed
    backgroundMusic.loop = false; // Enable looping
    backgroundMusic.play();

    // Cleanup background music when the component unmounts
    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    };
  }, []);

  return (
    <>
      <div className='App'>

        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatIaWebpage />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
