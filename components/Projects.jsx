import React from "react";
import PROPERTY from "@/public/assets/projects/property.jpg";
import CRYPTO from "@/public/assets/projects/crypto.jpg";
import NETFLIX from "@/public/assets/projects/netflix.jpg";
import TWITCH from "@/public/assets/projects/twitch.jpg";
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
            title="Property Finder"
            backGroundImg={PROPERTY}
            projectUrl="/Property"
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
          <ProjectItem
            title="Coming soon ...."
            backGroundImg={TWITCH}
            projectUrl="/#projects"
            tech=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
