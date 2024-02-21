import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Locations } from "../components/Locations";
import { LocationsHightlights } from "../components/LocationsHighlights";
import { Navbar } from "../components/Navbar";

const page = () => {
  return (
    <main>
      <Navbar />
      <ContactForm />
      <LocationsHightlights />
      <Footer data={false} />
    </main>
  );
};

export default page;
