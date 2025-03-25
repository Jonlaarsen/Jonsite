"use client";
import React from "react";
import { cn } from "./lib/utils";
import { useCountUp } from "react-countup";
import { FlipWordsDemo } from "./ui/hero-parallax";
import ContactForm from "./ContactForm";
import Link from "next/link";

const Contact = () => {
  useCountUp({
    ref: "counter",
    end: 763963712,
    scrollSpyOnce: true,
    enableScrollSpy: true,
    duration: 1.5,
    separator: "",
  });
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center md:pt-[5rem] w-full"
    >
      <div className="relative w-full min-h-screen px-10">
        {/* Orange del */}
        <div className="absolute top-0 left-0 w-full h-full bg-secondary-bg clip-path-custom2"></div>
        {/* Innehåll */}
        <div className="grid md:grid-cols-2 relative z-10 w-full min-h-screen">
          <ContactForm />
          <div className="hidden md:flex flex-col gap-5 justify-center w-full items-center text-center">
            <FlipWordsDemo />
            <Link
              className="hover:underline text-white text-lg md:text-2xl"
              href="tel:00460763963712"
            >
              (+46) 0<span id="counter"> </span>
            </Link>
            <Link
              href="mailto:jontoftdallarsen@icloud.com"
              className=" text-sm md:text-xl hover:underline"
            >
              jontoftdallarsen@icloud.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
