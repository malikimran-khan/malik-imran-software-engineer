import React from "react";
import { HelmetAsync } from "react-helmet-async";
import About from "./home/About";
import Testimonials from "./home/Testimonials";
import FAQ from "./home/FAQ";

export default function AboutPage() {
  return (
    <>
      <HelmetAsync>
        <title>About | Malik Imran Software Engineer | Full Stack Developer</title>
        <meta name="description" content="About Malik Imran — Full Stack Software Engineer specializing in MERN Stack, Ruby on Rails, and AI Integration. Based in Pakistan." />
      </HelmetAsync>
      <main className="pt-28">
        <About />
        <Testimonials />
        <FAQ />
      </main>
    </>
  );
}
