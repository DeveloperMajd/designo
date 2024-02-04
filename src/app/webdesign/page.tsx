import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { PageBanner } from "../components/PageBanner";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner />
      <Footer />
    </main>
  );
};

export default page;
