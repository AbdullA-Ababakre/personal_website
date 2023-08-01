import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutMe from "@site/src/components/AboutMe";
import Projects from "@site/src/components/Projects";
import Languages from "../components/Languages";
import Footer from "@site/src/components/Footer";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <AboutMe />
      <Languages />
      <Projects />
      {/* <Footer /> */}
    </Layout>
  );
}
