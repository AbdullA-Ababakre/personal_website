import React from "react";
import styles from "./index.module.css";
import PorjectItem from "../projectItem";

export default function Projects() {
  const projects = [
    {
      title: "Avarlab official website",
      subtitle: "Html, CSS, JavaScript,React,threeJs,mindAR",
      description:
        "Official site for digital human start up company using ReactJs DIY digital human dressing",
      github: "https://www.github.com/yourlink",
      website: "https://avarlab.com/",
      image: "https://s1.ax1x.com/2023/08/02/pPCLXwV.png",
    },
    {
      title: "digitl human DIY website",
      subtitle: "Html, CSS, JavaScript,React,threeJs",
      description: "DIY digital human dressing site using ThreeJs",
      github: "https://www.github.com/yourlink",
      website: "https://aiuni.io/",
      image: "https://s1.ax1x.com/2023/08/02/pPCLOe0.png",
    },
    {
      title: "Car sales project",
      subtitle: "Html, CSS, JavaScript, Vue, Vuex",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam leo, scelerisque sed odio eget, luctus faucibus augue. Fusce volutpat iaculis dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id eleifend libero. In hac habitasse platea dictumst.",
      github: "https://www.github.com/yourlink",
      website: "https://www.yourwebsite.com",
      image:
        "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
    },
  ];

  return (
    <section id="projects">
      <div className={styles.container}>
        <div className={styles.row}>
          <h1 className={styles.section__title}>
            Here are some of my{" "}
            <span className={styles.text__purple}>projects</span>
          </h1>
          <ul className={styles.project__list}>
            {projects.map((project, index) => {
              return <PorjectItem key={index} project={project} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
