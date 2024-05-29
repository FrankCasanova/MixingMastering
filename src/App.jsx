import React from 'react'

import { Footer, Header, WhatIaWebpage, Features, Possibility, Blog } from './containers';
import { Brand, Cta, Navbar } from './components';

import './App.css'


function App() {

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
