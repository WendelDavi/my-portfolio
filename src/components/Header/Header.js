import React, { useContext } from 'react';
import styles from './Header.module.css'
import { ComponentContext } from '../../contexts/ComponentContext';

const Header = () => {
  const { setActiveComponent } = useContext(ComponentContext);

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li><button onClick={() => handleClick('Description')}>Início</button></li>
          <li><button onClick={() => handleClick('About')}>Sobre</button></li>
          <li><button onClick={() => handleClick('Skills')}>Habilidades</button></li>
          <li><button onClick={() => handleClick('Projects')}>Projetos</button></li>
          <li><button onClick={() => handleClick('Contact')}>Contato</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;