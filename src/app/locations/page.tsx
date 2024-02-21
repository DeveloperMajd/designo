import { Footer } from "../components/Footer";
import { Locations } from "../components/Locations";
import { Navbar } from "../components/Navbar";

const page = () => {
  return (
    <main>
      <Navbar />
      <Locations data="img-right" />
      <Locations data="img-left" />
      <Footer />
    </main>
  );
};

export default page;
