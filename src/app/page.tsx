import { ContentShowcase } from "./components/ContentShowcase";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <ContentShowcase />
      <Footer />
    </main>
  );
}
