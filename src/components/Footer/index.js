import React from "react";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.row + "" + styles.footer__row}>
        <a href="#" className={styles.footer__anchor}>
          <figure className={styles.footer__logo}>
            <img
              src="./assets/logo.svg"
              className={styles.footer__logo__img}
              alt=""
            />
          </figure>
          <span className={styles.footer__logo__popper}>
            Top
            <i className="styles.fas fa-arrow-up"></i>
          </span>
        </a>
        <div className="styles.footer__social--list">
          <a
            href="https://google.com"
            target="_blank"
            className={
              styles.footer__social__link +
              " " +
              styles.link__hover_effect +
              " " +
              styles.link__hover_effect__white
            }
          >
            GitHub
          </a>
          <a
            href="https://google.com"
            target="_blank"
            className={
              styles.footer__social__link +
              " " +
              styles.link__hover_effect +
              " " +
              styles.link__hover__effect__white
            }
          >
            LinkedIn
          </a>
          <a
            href="mailto:email@email.com"
            target="_blank"
            className="
          styles.footer__social__link +
          '' +
          styles.link__hover_effect + ' ' +
          styles.link__hover_effect__white
        "
          >
            Email
          </a>
          <a
            href="./assets/Example Resume.pdf"
            target="_blank"
            className={
              styles.footer__social__link +
              " " +
              styles.link__hover_effect +
              " " +
              styles.link__hover__effect__white
            }
          >
            Resume
          </a>
        </div>
        <div className="footer__copyright">No CopyRight && Made with love</div>
      </div>
    </footer>
  );
}
