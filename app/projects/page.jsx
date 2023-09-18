import React from "react";
import Layouts from "../components/Layout/Layouts";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import FeaturedProject from "../components/Project/FeaturedProject";
import Project from "../components/Project/Project";
import ProjectData from "../components/Project/projectData.jsx";

export const metadata = {
  title: "Waquar Mahboob | Projects Page",
  description: "Generated by create next app",
};
const [data]=ProjectData();

const page = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layouts className="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
        <div className="grid grid-cols-12 gap-24 gap-y-32">
          {data.map((elem, ind) =>
            elem.type == "Featured Project" ? (
              <div className="col-span-12">
                <FeaturedProject
                  key={ind}
                  title={elem.title}
                  skills={elem.skills}
                  summary={elem.summary}
                  link={elem.link}
                  type={elem.type}
                  img={elem.img[Object.keys(elem.img)[0]]}
                  github={elem.github}
                />
              </div>
            ) : (
              <div className="col-span-6">
                <Project
                key={ind}
                  title={elem.title}
                  link={elem.link}
                  type={elem.type}
                  img={elem.img[Object.keys(elem.img)[0]]}
                  github={elem.github}
                />
              </div>
            )
          )}
          
        </div>
      </Layouts>
    </main>
  );
};

export default page;
