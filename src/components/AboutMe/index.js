import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import MyPicture from "@site/static/img/picture_me2.jpeg";
import Typed from "typed.js";

export default function HomepageFeatures() {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>A fullstack javascript engineer</i>",
        "A Proud Uyghur",
        "An Engineer who tried several startUps",
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.about_me}>
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
              <span className={styles.text__purple}> Abdulla Ababakre </span>
              &nbsp; <span className={styles.wave}> 👋 </span>{" "}
            </h1>{" "}
            <p className={styles.about_me__info__para}>
              I 'm{" "}
              {/* <strong className={styles.text__purple}>
                fullstack javascript engineer{" "}
              </strong>{" "} */}
              <span
                className={styles.text__purple + " " + styles.typed}
                ref={el}
              />
            </p>{" "}
            <div className={styles.about_me__links}>
              <a
                href="https://www.linkedin.com/in/abdulla-ababakre-52a3a3228/"
                className={styles.about_me__link}
              >
                <FaLinkedin size={24} />{" "}
              </a>{" "}
              <a
                href="https://github.com/AbdullA-Ababakre?tab=repositories"
                className={styles.about_me__link}
              >
                <FaGithub size={24} />{" "}
              </a>{" "}
              <a
                href="https://twitter.com/achilgin"
                className={styles.about_me__link}
              >
                <FaTwitter size={24} />{" "}
              </a>{" "}
              <a
                href="mailto:abdullaszu@gmail.com"
                className={styles.about_me__link}
              >
                <FiMail size={24} />{" "}
              </a>{" "}
              <a
                href="https://file.notion.so/f/s/e5c297a4-7c11-4404-b492-f859039cdc11/FrontEnd-Abdulla.pdf.pdf?id=c818d5a8-64c4-418b-999f-10a26bffef3b&table=block&spaceId=b88cd6d2-9152-4f8c-bc4b-0bc450386149&expirationTimestamp=1692144000000&signature=WqvM-YI11_3Fz5uClwr7Rpkdizx1HmhuUvihN83Ymto&downloadName=FrontEnd-Abdulla.pdf.pdf"
                target="_blank"
                className={styles.about_me__link}
              >
                <IoDocumentTextOutline size={24} />{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
