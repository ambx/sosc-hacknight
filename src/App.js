import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Hero from './components/landing';
import About from './components/about';
import Sponsors from './components/sponsors';
import Prizes from './components/prizes';
import styles from './app.module.scss'


function App() {
  return (
    <div className={styles.App}>
          <Hero />
          <About />
          <Prizes />
          <Sponsors />
          <Footer />
      
    </div>
  );
}

export default App;
