"use client";

import Image from "next/image";
import BgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import PhoneImage from "../assets/home/desktop/image-hero-phone.png";
import BgShape from "../assets/shared/desktop/bg-pattern-leaf.svg";
export const HomepageBanner = () => {
  return (
    <section className="content-showcase is-full-width">
      <div className="container">
        <div className="content-wrapper">
          <div className="bg-pattern-wrapper">
            <BgPattern />
          </div>

          <div className="columns">
            <div className="column is-12-tablet is-6-desktop text-col">
              <h1>
                Award-winning custom designs and digital branding solutions
              </h1>
              <p>
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
              <div className="btn-wrapper">
                <div className="btn onDark">Learn more</div>
              </div>
            </div>
            <div className="column is-12-tablet is-6-desktop img-col">
              <Image src={PhoneImage} alt="hero phone" />
            </div>
          </div>
        </div>
      </div>

      {/* Todo: add condition props (has-bg-shape) */}
      <div className="bg-pattern is-left-bottom is-hidden-touch">
        <BgShape />
      </div>
    </section>
  );
};
