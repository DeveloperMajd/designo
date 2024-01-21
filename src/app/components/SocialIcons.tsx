import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import YouTubeIcon from "../assets/shared/desktop/icon-youtube.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";
import PinterestIcon from "../assets/shared/desktop/icon-pinterest.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";

import Image from "next/image";

import Link from "next/link";

export const SocialIcons = () => {
  return (
    <div className="social-icons">
      <Link href="/">
        <FacebookIcon />
      </Link>
      <Link href="/">
        <YouTubeIcon />
      </Link>
      <Link href="/">
        <TwitterIcon />
      </Link>
      <Link href="/">
        <PinterestIcon />
      </Link>
      <Link href="/">
        <InstagramIcon />
      </Link>
    </div>
  );
};
