import { useState, useEffect } from "react";

const Projects = (props) => {
  const [projects, setProjects] = useState(null);
  
  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  }

  useEffect(() => {
    getProjectsData();
  }, [])

  const loaded = () => {
    // console.log(projects)
    return projects.map((project) => (
      <div className="project-div">
        <h1>{project.name}</h1>
        <img src={project.image} />

        <div className="buttons">
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>Live Site</button>
          </a>
        </div>
      </div>
    ))
  }
  
  return projects ? loaded() : <h1>Loading...</h1>
}

export default Projects;