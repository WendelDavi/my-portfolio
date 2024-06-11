import React from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Description from '../Description/Description';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

function App() {
  return (
      <div className={styles.container}>
          <Header />
          <Description />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
