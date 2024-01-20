import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">My Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="thumnail Maker"
            subTitle="Youtube - (2020 - 2022)"
            result="INDIA"
            des="During the lockdown piriod i have lot of time then i dcided to work on youtube in this pendimic."
          />
          <ResumeCard
            title="Video Editing"
            subTitle="youtube - (2020 - 2022)"
            result="INDIA"
            des="Video editing is the process of manipulating and rearranging video footage to create a final polished product, often involving tasks like trimming, adding effects, and adjusting audio.."
          />
          <ResumeCard
            title="Search Engine Optimization(SEO)"
            subTitle="Youtube - (2021 - 2022)"
            result="INDIA"
            des="Search Engine Optimization (SEO) is the practice of optimizing a website to increase its visibility and rank higher in search engine results pages (SERPs).."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
