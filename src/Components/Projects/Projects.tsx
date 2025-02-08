import "./Projects.css"
import SingleProject from "../SingleProject/SingleProject"
import { allProjects } from "./imports"


function Projects() {
    const mappedProjects = allProjects.map(({githubLink, languagesArray, liveSiteLink, projectDescription, projectImage, projectTitle})=>{
        return <SingleProject
        githubLink={githubLink}
        projectImage={projectImage}
        projectTitle={projectTitle}
        liveSiteLink={liveSiteLink}
        languagesArray={languagesArray}
        projectDescription={projectDescription}
        key={projectTitle}
        />
    })

  return (
    <section className='projects-section'>
        <div className="inner-wrapper">

        <h1 className="main-heading">My Projects</h1>
        {mappedProjects}

        <a href="https://github.com/daviddix/">
        <button className="sub-btn">View more on Github</button>
        </a>
        
        </div>

    </section>
  )
}

export default Projects