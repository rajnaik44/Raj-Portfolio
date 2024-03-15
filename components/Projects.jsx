import React from "react";
import TEXTUTILimg from "@/public/assets/projects/TextUtil.jpg";
import NETFLIX from "@/public/assets/projects/netflix.jpg";
import TODOlISTimg from "@/public/assets/projects/todoList.jpg";
import dataAnaWeb from "@/public/assets/projects/dataAnaWeb.png";
import MrPizza from '@/public/assets/projects/MrPizza.png'
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Data-Analytic Website"
            backGroundImg={dataAnaWeb}
            projectUrl="/Analytic"
            tech="Next js"
          />
          <ProjectItem
            title="Text Util"
            backGroundImg={TEXTUTILimg}
            projectUrl="/Textutil"
            tech="React js"
          />
          <ProjectItem
            title="Todo Lists"
            backGroundImg={TODOlISTimg}
            projectUrl="/Todo"
            tech="React js"
          />
          <ProjectItem
            title="Mr Pizza"
            backGroundImg={MrPizza}
            projectUrl="/Pizza"
            tech="Next Js"
          />
          <ProjectItem
            title="Coming soon ...."  
            backGroundImg={NETFLIX}
            projectUrl="/#projects"
            tech=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
