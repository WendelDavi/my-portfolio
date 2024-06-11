import React from 'react';
import styles from './Skills.module.css'
import htmlLogo from '../../img/html-logo.png';
import cssLogo from '../../img/css-logo.png';
import jsLogo from '../../img/JavaScript-logo.png';
import reactLogo from '../../img/react-logo.png';
import nodejsLogo from '../../img/nodejs-logo.png';
import gitLogo from '../../img/git-logo.png';
import githubLogo from '../../img/github-logo.png';
import javaLogo from '../../img/java-logo.png';
import pythonLogo from '../../img/python-logo.png';
import mysqlLogo from '../../img/mysql-logo.png';
import vscodeLogo from '../../img/vsc-logo.png';

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
