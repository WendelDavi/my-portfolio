import React, { useContext } from 'react';
import styles from './App.module.css'
import Header from '../Header/Header'
import Description from '../Description/Description';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import { ComponentContext } from '../../contexts/ComponentContext';

const App = () => {
  const { activeComponent } = useContext(ComponentContext);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Description':
        return <Description />;
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        {renderComponent()}
      </div>
      <Footer />
    </div>
    
  );
};

export default App;