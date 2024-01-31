"use client";

import Image from "next/image";
import Logo from "../assets/shared/desktop/logo-dark.png";
import { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };
  return (
    <section className="navbar">
      <div className="container is-flex">
        <div className="logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="hamburger-wrapper is-hidden-tablet">
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <div className="nav-items-wrapper is-hidden-mobile">
          <div className="nav-items">
            <Link href="/" className="nav-item">
              out compoany
            </Link>
            <Link href="/" className="nav-item">
              locations
            </Link>
            <Link href="/" className="nav-item">
              contact
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        className="nav-items-wrapper is-hidden-tablet"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        variants={variants}
      >
        <div className="nav-items">
          <div className="nav-item">out compoany</div>
          <div className="nav-item">locations</div>
          <div className="nav-item">contact</div>
        </div>
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      </motion.div>
    </section>
  );
};
