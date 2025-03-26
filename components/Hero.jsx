"use client";
import React from "react";
import { cn } from "./lib/utils";
import { Portfolio } from "@/data/data";
import { ThreeDCard } from "./ui/3d-card";
import Contact from "./Contact";
import { motion } from "motion/react";
import Skills from "./Skills";
import { HeroParallax } from "./HeroParallax";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-background overflow-hidden ">
      <div id="about" className="relative w-full pb-[5rem] px-10">
        {/* Orange del */}
        <div className="absolute top-0 left-0 w-full h-full bg-secondary clip-path-custom"></div>
        {/* Innehåll */}
        <motion.div
          initial={{ opacity: 0.1, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 relative z-10 w-full h-full py-0 pt-[10rem]  md:h-screen"
        >
          <div className="justify-center w-full items-center flex text-left">
            <h1 className="font-extrabold text-7xl md:text-8xl 2xl:text-[10rem] text-secondary-bg z-10">
              JON <br /> <span className="text-white">LARSEN</span>
            </h1>
            <motion.img
              src="https://prompti.ai/wp-content/uploads/2023/07/pcboi2.png"
              className="h-[10rem] md:h-[18rem]  w-auto rounded-full ml-[-8.5rem] 2xl:ml-[-17rem] md:ml-[-11.5rem] mb-[6rem] md:mb-[12rem]"
              alt=""
              initial={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="flex flex-col gap-5 justify-center w-full items-center text-center">
            {/* <h2 className="font-extrabold text-2xl md:text-4xl text-white uppercase">
              Let's make{" "}
              <span className="md:bg-primary px-2 py-1 rounded-2xl">your</span>{" "}
              vision a{" "}
              <span className="md:bg-primary px-2 py-1 rounded-2xl">
                reality!
              </span>
            </h2> */}
            <h1 className="text-5xl font-extrabold border-b-5 uppercase border-secondary-bg">
              Who is jon?
            </h1>
            <p className="text-lg text-center font-bold ">
              Hi, I'm Jon, a frontend web developer passionate about crafting
              sleek, user-friendly experiences.
              <br /> When I'm not coding, you'll find me exploring the world,
              diving into vintage motorbike builds, or drawing inspiration from
              fashion. <br /> Let's create something amazing!
            </p>
            <div className="text-white text-lg flex gap-5 md:text-2xl">
              <button className="group cursor-pointer mt-10 rounded-xl  border-violet-800 border-0 bg-transparent p-1 transition-all duration-500 hover:border-4">
                <div className="relative uppercase flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-violet-800 px-3 py-2 font-bold text-white">
                  <img
                    src="https://img.icons8.com/glyph-neue/64/github.png"
                    alt="github"
                    className="h-12 w-12"
                  />
                  <Link href="https://github.com/Jonlaarsen">github</Link>
                  <div
                    className={cn(
                      "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
                    )}
                  />
                </div>
              </button>
              <button className="group cursor-pointer mt-10 rounded-xl  border-violet-800 border-0 bg-transparent p-1 transition-all duration-500 hover:border-4">
                <div className="relative uppercase flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-violet-800 px-3 py-2 font-bold text-white">
                  <img
                    className="h-12 w-12"
                    src="https://img.icons8.com/ios-filled/50/resume.png"
                    alt="resume"
                  />
                  <a
                    download="Jon Larsen Resume.pdf"
                    href="/Jon Larsen Resume.pdf"
                  >
                    Resume
                  </a>

                  <div
                    className={cn(
                      "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]"
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div className=" max-w-screen overflow-hidden">
        <div>
          <Skills />
        </div>
        <div className="pb-[2rem]">
          <HeroParallax />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="md:py-10 px-2 flex items-center justify-center flex-col "
        >
          <h1
            id="portfolio"
            className=" text-3xl md:text-7xl font-extrabold border-b-7 border-primary uppercase"
          >
            Portfolio
          </h1>
          <div className="justify-evenly grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
            {Portfolio.map((item, index) => (
              <div key={index}>
                <ThreeDCard item={item} />
              </div>
            ))}
          </div>
        </motion.div>
        <Contact />
      </div>
    </div>
  );
};

export default Hero;
