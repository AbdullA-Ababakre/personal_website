import React from "react";
import styles from "./styles.module.css";

export default function Languages() {
  return (
    <section id="languages">
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.section__title}>
            {" "}
            This is my{" "}
            <span className={styles.text__purple}> technology stack </span>{" "}
          </h1>{" "}
          <div className={styles.language__list}>
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt="Html Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> HTML </span>{" "}
            </div>{" "}
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt="CSS Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> CSS </span>{" "}
            </div>{" "}
            <div className="language">
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt="JavaScript Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> JavaScript </span>{" "}
            </div>{" "}
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/typescript-3521774-2945272.png"
                  alt="TypeScript Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> TypeScript </span>{" "}
            </div>{" "}
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/vue-282497.png"
                  alt="Vue Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> Vue </span>{" "}
            </div>{" "}
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-2-1174936.png?f=avif&w=512"
                  alt="NodeJs Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> NodeJs </span>{" "}
            </div>{" "}
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                  alt="React Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> React </span>{" "}
            </div>{" "}
            <div className={styles.language}>
              <figure className={styles.language__img__wrapper}>
                <img
                  src="https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png"
                  alt="Express Logo"
                  className={styles.language__img}
                />{" "}
              </figure>{" "}
              <span className={styles.language__name}> Express </span>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
