import React from 'react'
import { useEffect } from "react";
import clickMenuSound from '/public/clickMenu.mp3';
import clickButtonSound from '/public/clickButton.mp3';
import backGroundMusic from '/public/backGroundMusic.mp3';
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

    const startBackgroundMusic = () => {
      backgroundMusic.play().catch(error => {
        console.error('Failed to play background music:', error);
      });

      // Remove event listener after first interaction
      document.removeEventListener('click', startBackgroundMusic);
    };

    // Add event listener for user interaction
    document.addEventListener('click', startBackgroundMusic);

    // Cleanup on component unmount
    return () => {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
      document.removeEventListener('click', startBackgroundMusic);
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
