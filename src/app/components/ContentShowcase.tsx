"use client";

import Image from "next/image";
import BgPattern from "../assets/home/desktop/bg-pattern-hero-home.svg";
import PhoneImage from "../assets/home/desktop/image-hero-phone.png";
export const ContentShowcase = () => {
  return (
    <section className="content-showcase">
      <div className="container is-full-width">
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
              <Image
                src={PhoneImage}
                alt="hero phone"
                style={{ objectFit: "cover" }}
                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
