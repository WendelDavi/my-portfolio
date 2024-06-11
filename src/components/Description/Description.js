import React from 'react';
import styles from './Description.module.css';
import myPhoto from '../../assets/my-photo.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Description = () => (
    <main>
        <div className={styles.container} id="inicio">
            <div className={styles.photoContainer}>
                <img src={myPhoto} alt="Minha Foto" className={styles.photo} />
            </div>
            <h1 className={styles.title}>Wendel Silva Davi</h1>
            <p className={styles.description}>
                Um desenvolvedor Front-End com o objetivo de aprender cada vez mais através da criação de projetos.
            </p>
            <div className={styles.socialMedia}>
                <ul className={styles.list}>
                    <li>
                        <a href="https://github.com/WendelDavi" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/wendel-d-37a4ba189/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </main>
);

export default Description;
