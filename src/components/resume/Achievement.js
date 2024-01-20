import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2023</p>
          <h2 className="text-4xl font-bold">  </h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="First Year"
            subTitle="Achieve first Rank in my college"
            result="Success"
            des="in my first year i secuired 89% in the dr.A.P.J Abdul Kalam Technical University Uttar Pradesh"
          />
          <ResumeCard
            title="Second Year and Third Year"
            subTitle="Teaching"
            result="Success"
            des="During the corona pendimic in second year i dicided to start Coaching in my village.So, My village people give me an award for teaching the student"
          />
          <ResumeCard
            title="Fourth Year"
            subTitle="Learning Skills"
            result="Success"
            des="In my fourth year I have completed Mern Stack developement and i have also completed the hands on coding in java and javascript."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Achievement;
