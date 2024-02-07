import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageBanner } from "../components/PageBanner";
import { ProjectsGrid } from "../components/ProjectsGrid";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner />
      <ProjectsGrid data="Two-grid" />
      <Footer />
    </main>
  );
};

export default page;
