import React from 'react';
import styles from './Projects.module.css'

const Projects = () => (
    <div className={styles.container} id="projetos">
        <h2 className={styles.title}>Projetos</h2>
        <div className={styles.grid}>
            <div className={styles.project}>
                <h3>Tabuada</h3>
                <p>Um site onde o usuário digita um número, e é exibido a tabuada desse número.</p>
                <a href="https://tabuada-nxkm9h90u-wendel-davis-projects.vercel.app" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                <a href="https://github.com/WendelDavi/wendeldavi-portfolio/tree/main/tabuada" target="_blank" rel="noopener noreferrer">Ver Repositório</a>
            </div>
            <div className={styles.project}>
                <h3>Lista ToDo</h3>
                <p>Um aplicativo de lista de tarefas, onde o usuário pode adicionar, remover, editar e marcar tarefas como concluídas.</p>
                <a href="https://todo-list-git-main-wendel-davis-projects.vercel.app" target="_blank" rel="noopener norefer">Ver Projeto</a>
                <a href="https://github.com/WendelDavi/todo-list" target="_blank" rel="noopener norefer">Ver Repositório</a>
            </div>
        </div>
    </div>
);

export default Projects;
