import ProjectCards from "./ProjectCards";
import "./CSS/projects.css";

const Projects = () => {
  const projects = ["Project 1", "Project 2"];

  return (
    <>
      <h1 className="projects">Projects</h1>
      {/* This is to be able to position the cards  */}
      <div className="projects-flex">
          {projects.map((projects, index) => {
            return <ProjectCards title={projects} />;
          })}
      </div>
    </>
  );
};

export default Projects;
