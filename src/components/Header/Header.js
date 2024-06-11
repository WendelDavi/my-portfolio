import React from 'react';
import styles from './Header.module.css'

const Header = () => (
    <header className={styles.header}>
        <nav>
            <ul className={styles.navList}>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#habilidades">Habilidades</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
