import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutMe from "@site/src/components/AboutMe";
import Projects from "@site/src/components/Projects";
import Languages from "../components/Languages";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="web development blog and portfolio"
    >
      <AboutMe />
      <Languages />
      <Projects />
      {/* <Footer /> */}
    </Layout>
  );
}
