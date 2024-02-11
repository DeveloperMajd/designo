import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TextMediaBanner } from "../components/TextMediaBanner";
import { TextMedia } from "../components/TextMedia";

const about = () => {
  return (
    <div>
      <Navbar />
      <TextMediaBanner />
      <TextMedia data="img-left" />
      <TextMedia data="img-right" />
      <Footer />
    </div>
  );
};

export default about;
