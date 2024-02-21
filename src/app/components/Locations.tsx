"use client";

import { textMediaType } from "./TextMedia";
import useWindowSize from "../hooks/useWindowSize";
import Image from "next/image";

import ImgCanadaDesktop from "../assets/locations/desktop/image-map-canada.png";
import ImgCanadaTablet from "../assets/locations/tablet/image-map-canada.png";

import CirclesMobile from "../assets/shared/desktop/bg-pattern-three-circles.svg";
import CirclesTablet from "../assets/shared/desktop/bg-pattern-two-circles.svg";

import Link from "next/link";

interface LocationsProps {
  data: textMediaType;
}
export const Locations = ({ data }: LocationsProps) => {
  const { width } = useWindowSize();

  const isMobile = width <= 768;
  const isTablet = width > 768 && width < 1024;
  const isDesktop = width >= 1024;

  return (
    <section className="locations is-full-width">
      <div className="container">
        <div className={`columns is-variable is-6 ${data}`}>
          <div
            className={`column is-12-tablet is-4-desktop img-col ${
              isMobile ? "is-mobile" : isTablet ? "is-tablet" : "is-desktop"
            }`}
          >
            <Image
              src={isDesktop ? ImgCanadaDesktop : ImgCanadaTablet}
              alt="Canada"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="column is-12-tablet is-8-desktop content-col">
            <div className="content-wrapper">
              <div className={`columns is-multiline content-inner-columns`}>
                <div className="column is-6-mobile is-12-tablet">
                  <div className="title h5">Canada</div>
                </div>
                <div className="column is-6 address">
                  <p>
                    <strong>Designo Central Office</strong>
                    <br />
                    3886 Wellington Street
                    <br />
                    Toronto, Ontario M9C 3J5
                  </p>
                </div>
                <div className="column is-6 contacts">
                  <p>
                    <strong>Contact</strong>
                    <br />
                    P : +1 253-863-8967
                    <br />M :
                    <Link href="mailto:contact@designo.co">
                      contact@designo.co
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-pattern">
              {isMobile ? <CirclesMobile /> : <CirclesTablet />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
