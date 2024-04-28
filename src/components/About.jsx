import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const badges = [
    {
      name: "HTML5",
      image: "https://img.shields.io/badge/HTML-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white",
    },
    {
      name: "CSS3",
      image: "https://img.shields.io/badge/CSS-%231572B6.svg?style=flat-square&logo=css3&logoColor=white",
    },
    {
      "name": "Bootstrap",
      "image": "https://img.shields.io/badge/Bootstrap-%238511FA.svg?style=flat-square&logo=bootstrap&logoColor=white"
   },
   {
      "name": "TailwindCSS",
      "image": "https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white"
   },
   {
      "name": "Markdown",
      "image": "https://img.shields.io/badge/Markdown-%23000000.svg?style=flat-square&logo=markdown&logoColor=white"
   },
   {
      "name": "JavaScript",
      "image": "https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"
   },
   {
      "name": "TypeScript",
      "image": "https://img.shields.io/badge/Typescript-%23007ACC.svg?style=flat-square&logo=typescript&logoColor=white"
   },
   {
      "name": "C#",
      "image": "https://img.shields.io/badge/C%23-%23239120.svg?style=flat-square&logo=csharp&logoColor=white"
   },
   {
      "name": ".Net",
      "image": "https://img.shields.io/badge/.NET-5C2D91?style=flat-square&logo=.net&logoColor=white"
   },
   {
      "name": "Angular",
      "image": "https://img.shields.io/badge/Angular-%23DD0031.svg?style=flat-square&logo=angular&logoColor=white"
   },
   {
      "name": "Next JS",
      "image": "https://img.shields.io/badge/NextJS-black?style=flat-square&logo=next.js&logoColor=white"
   },
   {
      "name": "NodeJS",
      "image": "https://img.shields.io/badge/NodeJS-6DA55F?style=flat-square&logo=node.js&logoColor=white"
   },
   {
      "name": "React",
      "image": "https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"
   },
   {
      "name": "RxJS",
      "image": "https://img.shields.io/badge/Rxjs-%23B7178C.svg?style=flat-square&logo=reactivex&logoColor=white"
   },
   {
      "name": "Chart.js",
      "image": "https://img.shields.io/badge/ChartJS-F5788D.svg?style=flat-square&logo=chart.js&logoColor=white"
   },
   {
      "name": "Redux",
      "image": "https://img.shields.io/badge/Redux-%23593d88.svg?style=flat-square&logo=redux&logoColor=white"
   },
   {
      "name": "MongoDB",
      "image": "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat-square&logo=mongodb&logoColor=white"
   },
   {
      "name": "MySQL",
      "image": "https://img.shields.io/badge/MySQL-%2300000f.svg?style=flat-square&logo=mysql&logoColor=white"
   },
   {
      "name": "Firebase",
      "image": "https://img.shields.io/badge/Firebase-%23039BE5.svg?style=flat-square&logo=firebase"
   },
   {
      "name": "Cloudflare",
      "image": "https://img.shields.io/badge/Cloudflare-F38020?style=flat-square&logo=Cloudflare&logoColor=white"
   },
   {
      "name": "GithubPages",
      "image": "https://img.shields.io/badge/Github%20Pages-121013?style=flat-square&logo=github&logoColor=white"
   },
   {
      "name": "Netlify",
      "image": "https://img.shields.io/badge/Netlify-%23000000.svg?style=flat-square&logo=netlify&logoColor=#00C7B7"
   },
   {
      "name": "Vercel",
      "image": "https://img.shields.io/badge/Vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white"
   },
   {
      "name": "WordPress",
      "image": "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=flat-square&logo=WordPress&logoColor=white"
   },
   {
      "name": "Adobe Lightroom",
      "image": "https://img.shields.io/badge/Adobe%20Lightroom-31A8FF.svg?style=flat-square&logo=Adobe%20Lightroom&logoColor=white"
   },
   {
      "name": "Figma",
      "image": "https://img.shields.io/badge/Figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white"
   }
  ];

  const badgesHTML = (
    <div className="flex flex-wrap gap-2">
    {badges.map((badge, index) => (
      <React.Fragment key={badge.name}>
        <img src={badge.image} className="mr-1" />
        {(index + 1) % 13 === 0 && <br />}
      </React.Fragment>
    ))}
 </div>
  );

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript &
        JavaScript, and expertise in frameworks like React, and Angular. I'm a
        quick learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutions that solve real-world problems.
        I thrive on exploring innovative ideas, emerging technologies and gaining real-world experience. 
        So let's connect and work together to bring intriguing ideas to life!
      </motion.p>

      <div className="mt-6">
        <h3 className="text-[17px] max-w-3xl leading-[30px]">Tech Stack:</h3>
        {badgesHTML}
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
