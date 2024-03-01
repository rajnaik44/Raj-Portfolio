import React from "react";
import TEXTUTILimg from "@/public/assets/projects/textutil.png";
import CRYPTO from "@/public/assets/projects/crypto.jpg";
import NETFLIX from "@/public/assets/projects/netflix.jpg";
import TODOlISTimg from "@/public/assets/projects/todolists.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            title="Coming soon ...."
            backGroundImg={CRYPTO}
            projectUrl="/#projects"
            tech=""
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
