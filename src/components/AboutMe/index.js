import React from 'react';
import styles from './styles.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import MyPicture from "@site/static/img/picture_me2.jpeg";


export default function HomepageFeatures() {
  return (
    <section id="about_me" className={styles.about_me}>
    <div className={styles.flex + " " + styles.flex - 1}>
      <div className={styles.about_me__info + " " + styles.row}>
        <div className={styles.about_me__info__container}>
          <figure className={styles.about_me__picture__mask}>
            <img
              src={MyPicture}
              className={styles.about_me__picture}
              alt="Picture of Me!"
            />
          </figure>{" "}
          <h1 className={styles.about_me__info__title}>
            Hey!I 'm{" "}
            <span className={styles.text__purple}> David Bragg </span>&nbsp;{" "}
            <span className={styles.wave}> 👋 </span>{" "}
          </h1>{" "}
          <p className={styles.about_me__info__para}>
            I 'm a{" "}
            <strong className={styles.text__purple}>
              frontend software engineer{" "}
            </strong>{" "}
            with a strong passion for building responsive and performant web
            applications with great user experiences that positively impacts
            the world.{" "}
          </p>{" "}
          <div className={styles.about_me__links}>
            <a href="" className={styles.about_me__link}>
              <FaLinkedin size={24} />{" "}
            </a>{" "}
            <a href="" className={styles.about_me__link}>
              <FaGithub size={24} />{" "}
            </a>{" "}
            <a href="" className={styles.about_me__link}>
              <FiMail size={24} />{" "}
            </a>{" "}
            <a href="" target="_blank" className={styles.about_me__link}>
              <IoDocumentTextOutline size={24} />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </section>
  );
}