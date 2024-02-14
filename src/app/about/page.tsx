import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TextMediaBanner } from "../components/TextMediaBanner";
import { TextMedia } from "../components/TextMedia";
import { LocationsHightlights } from "../components/LocationsHighlights";

const about = () => {
  return (
    <div>
      <Navbar />
      <TextMediaBanner />
      <TextMedia data="img-left" />
      <LocationsHightlights />
      <TextMedia data="img-right" />
      <Footer />
    </div>
  );
};

export default about;
