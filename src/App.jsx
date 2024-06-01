import React from 'react'
import { hoverButton, hoverAncor, clickMenu, clickButton, playBackGroundMusic } from './playSounds.js';
import { Footer, Header, WhatIaWebpage, Features, Possibility, Blog } from './containers';
import { Brand, Cta, Navbar } from './components';

import './App.css'


const App = () => {
  hoverButton()
  hoverAncor()
  clickMenu()
  clickButton()
  playBackGroundMusic()



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
