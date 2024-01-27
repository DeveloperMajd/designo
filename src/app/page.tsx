import { ContentShowcase } from "./components/ContentShowcase";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ProjectsGrid } from "./components/ProjectsGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ContentShowcase />
      <ProjectsGrid data="Three-grid" />
      <Footer />
    </main>
  );
}
