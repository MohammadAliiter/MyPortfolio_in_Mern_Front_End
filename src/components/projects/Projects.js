import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectfour,projectfive,projectsix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Nike.Store Clone"
          des=" it is the e-commerce portal of the Nike Company, a
          manufacturer branded sports shoes and other sports products!"
          src={projectOne}
        />
        <ProjectsCard
          title="Quiz Web App"
          des=" this is quiz web app in which the question related to web development in quiz form.
          this made in htm Css and java script"
          src={projectTwo}
        />
        <ProjectsCard
          title="Chatting App"
          des="A JavaScript and React-based chatting app project designed to facilitate real-time communication between users, offering features such as instant messaging, group chats, user profiles, and message encryption for enhanced privacy."
          src={projectThree}
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="This is  social media clone, developed using SQL and MySQL database HTML, CSS, React, JavaScript for Frontend development and Node.js, and Express.js for backend."
          src={projectfour}
        />
        <ProjectsCard
          title="gym Website"
          des="A React.js-based gym website designed to provide users with a seamless fitness experience, featuring interactive UI, workout routines, class schedules, membership information, and personal training options."
          src={projectfive}
        />
        <ProjectsCard
          title="E-Commerce Website"
          des="This is e-commerce website, built with React, JavaScript, and Node.js, provides a seamless online shopping experience with a wide range of products. Simplify your shopping with us!"
          src={projectsix}
        />
      </div>
    </section>
  );
}

export default Projects