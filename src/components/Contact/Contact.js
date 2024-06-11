import React from 'react';
import styles from './Contact.module.css';

const Contact = () => (
    <section className={styles.container} id="contato">
        <h2 className={styles.title}>Contato</h2>
        <div>
            <div className={styles.email}>
                <a href="mailto:wendeldavi777@gmail.com">wendeldavi777@gmail.com</a>
            </div>
        </div>
    </section>
);

export default Contact;
