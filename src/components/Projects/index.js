import React from "react";
import styles from "./index.module.css";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

export default function Projects() {
    return (
        <section id="projects">
            <div className={styles.container}>
                <div className={styles.row}>
                    <h1 className={styles.section__title}>Here are some of my <span className={styles.text__purple}>projects</span></h1>
                    <ul className={styles.project__list}>
                        <li className={styles.project}>
                            <div className={styles.project__wrapper}>
                                <img src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" className={styles.project__img} alt="Car subscription project" />
                                <div className={styles.project__description}>
                                    <h3 className={styles.project__description__title}>Car sales project</h3>
                                    <h4 className={styles.project__description__sub_title}>
                                        Html, CSS, JavaScript, Vue, Vuex
                                    </h4>
                                    <p className={styles.project__description__para}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget,
                                        luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.
                                    </p>
                                    <div className={styles.project__description__links}>
                                        <a href="https://www.github.com/yourlink" target="_blank" className={styles.project__description__link}>
                                            <FaGithub size={24} />
                                        </a>
                                        <a href="https://www.yourwebsite.com" className={styles.project__description__link}>
                                            <FiExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.project}>
                            <div className={styles.project__wrapper}>
                                <img src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" className={styles.project__img} alt="Car subscription project" />
                                <div className={styles.project__description}>
                                    <h3 className={styles.project__description__title}>Car sales project</h3>
                                    <h4 className={styles.project__description__sub_title}>
                                        Html, CSS, JavaScript, Vue, Vuex
                                    </h4>
                                    <p className={styles.project__description__para}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget,
                                        luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.
                                    </p>
                                    <div className={styles.project__description__links}>
                                        <a href="https://www.github.com/yourlink" target="_blank" className={styles.project__description__link}>
                                            <FaGithub size={24} />
                                        </a>
                                        <a href="https://www.yourwebsite.com" className={styles.project__description__link}>
                                            <FiExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.project}>
                            <div className={styles.project__wrapper}>
                                <img src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png" className={styles.project__img} alt="Car subscription project" />
                                <div className={styles.project__description}>
                                    <h3 className={styles.project__description__title}>Dashboard</h3>
                                    <h4 className={styles.project__description__sub_title}>
                                        Html, CSS, JavaScript, Vue, Vuex
                                    </h4>
                                    <p className={styles.project__description__para}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget,
                                        luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.
                                    </p>
                                    <div className={styles.project__description__links}>
                                        <a href="https://www.github.com/yourlink" target="_blank" className={styles.project__description__link}>
                                            <FaGithub size={24} />
                                        </a>
                                        <a href="https://www.yourwebsite.com" className={styles.project__description__link}>
                                            <FiExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
