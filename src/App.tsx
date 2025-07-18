import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Video from './components/Video';
import Mission from './components/Mission';
import Starship from './components/Starship';
import Human from './components/Human';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Video/>
      <Mission/>
      <Starship/>
      <Human/>
      <Footer/>

    </div>
  );
}

export default App;
