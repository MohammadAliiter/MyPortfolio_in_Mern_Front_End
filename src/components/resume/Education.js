import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.TECH in Computer Science"
            subTitle="Dr A.P.J Abdul Kalam Technical University (2019 - 2023)"
            result="Grade - 79%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary School Education"
            subTitle="UP BOARD (20016 - 2018)"
            result="Grade - 80%"
            des="Higher Secondary education in Physics , Chemistry an Mathematics  ."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="UP BOARD (2014 - 2016)"
            result="Grade - 85%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Ali Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development intern"
            subTitle="DigitalBhim - (06/2023- 08/2023)"
            result="Remote"
            des=" As a web development intern at DigitalBhim, I honed skills in REact, Node.js, Express, and MongoDB. Proficient in creating responsive interfaces with Tailwind CSS, I contributed to building dynamic and efficient web applications, gaining valuable experience in the comprehensive tech stack for modern web development."
          />
          <ResumeCard
            title="Teaching"
            subTitle="Part Time - (2021 - present)"
            result="INDIA"
            des="Passionate about empowering aspiring developers, I leverage my expertise in REact, Node.js, Express, MongoDB, and Tailwind CSS to provide comprehensive part-time teaching. Through my channel, I deliver engaging tutorials, fostering a community of learners eager to master these technologies, equipping them for success in the dynamic field of web development."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Intern - (2022 - 2023)"
            result="Remote"
            des="Front-end development internship offers practical experience in building user interfaces, utilizing HTML, CSS, and JavaScript, while collaborating with teams to create engaging and responsive web applications.."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education