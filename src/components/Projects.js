import ProjectCards from './ProjectCards'
import "./CSS/projects.css"

const Projects = () => {
    const projects = ["Project 1", "Project 2"];

    return (
      <>    
        <h1 className="projects"></h1>
        <div className="projects-cards">
        {projects.map((projects, index) => {
          return <ProjectCards title={projects} />;
        })}
      </div>
      </>
    );
}
 
export default Projects;