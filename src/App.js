import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/footer'
import Landing from './components/landing/landing'
import About from './components/about/about'
import Sponsors from './components/sponsors/sponsors'
import Prizes from './components/prizes/prizes'


function App() {
  return (
    <div className="App">

          <Navbar />
          <Landing />
          <About />
          <Prizes />
          <Sponsors />
          <Footer />
      
    </div>
  );
}

export default App;
