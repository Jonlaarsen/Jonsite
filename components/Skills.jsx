import React from "react";
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center h-full gap-10 w-full justify-center"
    >
      <h1 className="text-3xl md:text-5xl pb-10 uppercase  font-extrabold">
        Some of my skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 text-xl md:text-4xl  justify-cente w-full items-center text-center">
        <div className="flex flex-col items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/nolan/96/css3.png"
              alt="css3"
            />
            <h1>CSS</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/color/96/html-5--v1.png"
              alt="html-5--v1"
            />
            <h1>Html</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/color/96/javascript--v1.png"
              alt="javascript--v1"
            />
            <h1>JavaScript</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/color/96/typescript.png"
              alt="typescript"
            />
            <h1>TypeScript</h1>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
              alt="external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo"
            />
            <h1>React</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/nolan/96/bootstrap.png"
              alt="bootstrap"
            />

            <h1>Bootstrap</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/color/96/material-ui.png"
              alt="material-ui"
            />
            <h1>Material UI</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/nolan/96/tailwind_css.png"
              alt="tailwind_css"
            />
            <h1>Tailwind CSS</h1>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
              alt="tailwind_css"
            />
            <h1>Vercel</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/nolan/64/nextjs.png"
              alt="nextjs"
            />
            <h1>NextJS</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/fluency/96/supabase.png"
              alt="supabase"
            />
            <h1>Supabase</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="flex gap-4 text-center justify-center items-center"
          >
            <img
              className="md:h-[96px] md:w-[96px] h-[5rem] w-[5rem]"
              src="https://img.icons8.com/nolan/96/amazon-web-services.png"
              alt="amazon-web-services"
            />
            <h1>Amazon WS</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
