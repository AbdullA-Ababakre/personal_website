import React from "react";
import styles from "./index.module.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const PorjectItem = ({ project }) => {
  return (
    <li className={styles.project}>
      <div className={styles.project__wrapper}>
        <img
          src={project.image}
          className={styles.project__img}
          alt="Car subscription project"
        />
        <div className={styles.project__description}>
          <h3 className={styles.project__description__title}>
            {project.title}
          </h3>
          <h4 className={styles.project__description__sub_title}>
            {project.subtitle}
          </h4>
          <p className={styles.project__description__para}>
            {project.description}
          </p>
          <div className={styles.project__description__links}>
            <a
              href={project.github}
              target="_blank"
              className={styles.project__description__link}
            >
              <FaGithub size={24} />
            </a>
            <a
              href={project.link}
              className={styles.project__description__link}
            >
              <FiExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PorjectItem;
