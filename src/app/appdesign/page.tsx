import React from "react";
import { PageBanner } from "../components/PageBanner";
import { ProjectsCards } from "../components/ProjectsCards";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner />
      <ProjectsCards />
      <ProjectsGrid data="Two-grid" />
      <Footer />
    </main>
  );
};

export default page;
