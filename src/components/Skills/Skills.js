import React from 'react';
import styles from './Skills.module.css'
import htmlLogo from '../../assets/html-logo.png';
import cssLogo from '../../assets/css-logo.png';
import jsLogo from '../../assets/JavaScript-logo.png';
import reactLogo from '../../assets/react-logo.png';
import nodejsLogo from '../../assets/nodejs-logo.png';
import gitLogo from '../../assets/git-logo.png';
import githubLogo from '../../assets/github-logo.png';
import javaLogo from '../../assets/java-logo.png';
import pythonLogo from '../../assets/python-logo.png';
import mysqlLogo from '../../assets/mysql-logo.png';
import vscodeLogo from '../../assets/vsc-logo.png';

const Skills = () => (
    <section>
        <div className={styles.container} id='habilidades'>
            <h2 className={styles.title}>Habilidades</h2>
            <ul className={styles.grid}>
                <li><img src={htmlLogo} alt="HTML Logo"/>HTML</li>
                <li><img src={cssLogo} alt="CSS Logo"/>CSS</li>
                <li><img src={jsLogo} alt="JavaScript Logo"/>JavaScript</li>
                <li><img src={reactLogo} alt="React Logo"/>React</li>
                <li><img src={nodejsLogo} alt="Node.js Logo"/>Node.js</li>
                <li><img src={gitLogo} alt="Git Logo"/>Git</li>
                <li><img src={githubLogo} alt="GitHub Logo"/>GitHub</li>
                <li><img src={javaLogo} alt="Java Logo"/>Java</li>
                <li><img src={pythonLogo} alt="Python Logo"/>Python</li>
                <li><img src={mysqlLogo} alt="MySQL Logo"/>MySQL</li>
                <li><img src={vscodeLogo} alt="VS Code Logo"/>VS Code</li>
            </ul>
        </div>
    </section>
);

export default Skills;
