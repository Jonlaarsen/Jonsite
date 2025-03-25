"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HeroParallax } from "@/components/HeroParallax";
import { Portfolio } from "@/data/data";

const page = () => {
  return (
    <div className=" max-w-screen bg-background overflow-hidden">
      <div className="pb-[10rem]">
        <HeroParallax />
      </div>

      <div className="grid grid-cols-2 w-full justify-center items-center  gap-10">
        {Portfolio.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            key={item.id}
            className="flex flex-col w-full  justify-center items-center "
          >
            <div className="w-[30rem] text-left flex flex-col gap-6 pb-10">
              {/* <Link href={{pathname:`blog/${item.id}`}} > */}
              <Link href={item.link}>
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  src={item.image}
                  className="w-full h-auto shadow-lg"
                  alt={item.title}
                />
                <h1 className="text-4xl font-bold pt-10">{item.title}</h1>
              </Link>
              {/* <hr className='border ml-[-2.5rem] border-white' /> */}
              <p className=" font-semibold text-slate-800  text-[0.9rem] w-full">
                {item.desc}
              </p>
              <p className="text-slate-500 font-normal text-[0.8rem]">
                Made with {item.details}
              </p>
              <a
                className=" underline hover:text-slate-500"
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                visit website
              </a>
            </div>
            <hr className="borde border-white" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default page;
