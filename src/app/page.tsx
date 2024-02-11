import { ContactShowcase } from "./components/ContactShowcase";
import { HomepageBanner } from "./components/HomepageBanner";
import { Footer } from "./components/Footer";
import { InfoHighlights } from "./components/InfoHighlights";
import { Navbar } from "./components/Navbar";
import { ProjectsGrid } from "./components/ProjectsGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomepageBanner />
      <ProjectsGrid data="Three-grid" />
      <InfoHighlights />
      <Footer />
    </main>
  );
}
