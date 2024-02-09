import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageBanner } from "../components/PageBanner";
import { ProjectsCards } from "../components/ProjectsCards";
import { ProjectsGrid } from "../components/ProjectsGrid";

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
