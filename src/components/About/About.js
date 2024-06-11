import React from 'react';
import styles from './About.module.css'

const About = () => (
    <section>
        <div className={styles.container} id="sobre">
            <h2 className={styles.title}>Sobre mim</h2>
            <p className={styles.about}>
                Eu tenho 21 anos e comecei minha faculdade em 2021. Ainda não tenho experiência profissional na
                área de desenvolvimento, porém, estou me aprimorando em busca de uma oportunidade para mostrar minhas
                habilidades e conhecimentos.
                <br /><br />
                Tenho conhecimento sobre JavaScript, além de contato com React, Node.js, outras linguagens de programação como Java e
                Python e banco de dados com MySQL.
                <br /><br />
                Além do desenvolvimento de sistemas, eu aprendi na faculdade sobre modelagem, usabilidade, gestão e qualidade de software,
                sistemas distribuídos e engenharia de software.
            </p>
        </div>
    </section>
);

export default About;
