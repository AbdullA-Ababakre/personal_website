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
      title: "Umbrella-Uber",
      subtitle: "wxml,wxss,javascript,NodeJs ,Mongodb",
      description:
        "This is a wechat mini program for connecting the one who has a umbrella with the one who doesn't . Used wxml,wxss,javascript,NodeJs ,Mongodb",
      github: "https://github.com/AbdullA-Ababakre/MATCH_UMBRELLA",
      website: "https://github.com/AbdullA-Ababakre/MATCH_UMBRELLA",
      image: "https://s1.ax1x.com/2023/08/15/pPM2238.png",
    },
    {
      title: "Personal-Mentor",
      subtitle: "wxml,wxss,javascript,NodeJs ,Mongodb",
      description:
        "One-to-one personal experience sharing site connecting experienced senior schoolmates with the ones who need some guidance .",
      github: "https://mp.weixin.qq.com/s/Q1nrPBoLqBRHLv1cEifqrA",
      website: "https://mp.weixin.qq.com/s/k7Dz4U0_G0LxN0-5XK-iHA",
      image: "https://s1.ax1x.com/2023/08/15/pPM24Bj.png",
    },
    {
      title:"AI projects",
      subtitle: "langchain,javascript,nextJs,tailwindcss",
      description:
        "AI pdf chatbot, AI memory chatbot , AI HR assistant , AI content creator",
      github: "https://github.com/AbdullA-Ababakre/AI_learning_projects",
      website: "https://ai-learning-projects.vercel.app/",
      image:"https://z1.ax1x.com/2023/10/25/piVeCFO.png"
    },
    {
      title:"AI Clone",
      subtitle: "langchain,javascript,nextJs,tailwindcss",
      description:
        "AI Clone platform",
      github: "https://github.com/AbdullA-Ababakre/AiClone",
      website: "https://www.myaiclone.co/",
      image:"https://s11.ax1x.com/2023/08/01/pPCo0IJ.png"
    },
    {
      title:"More Projects",
      subtitle: "langchain,javascript,nextJs,tailwindcss",
      description:
        "More Projects are in my resume ",
      github: "https://github.com/AbdullA-Ababakre/AI_learning_projects",
      website: "https://mega.nz/file/4PVS2A4b#-0ZJoPKz2jYjkVd_QBUBB3wsoBNBi-7U1u1HjT7Lok0",
      image:"https://z1.ax1x.com/2023/10/25/piVeCFO.png"
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
