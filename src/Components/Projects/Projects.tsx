import "./Projects.css"
import SingleProject from "../SingleProject/SingleProject"
import { allProjects } from "./imports"
import viewMoreIcon from "./assets/view-more-icon.svg"


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

        <a target="_blank" href="https://github.com/daviddix/">
        <button className="sub-btn">
          View more on Github
          <img src={viewMoreIcon} className="view-more" />
          </button>
        </a>
        
        </div>

    </section>
  )
}

export default Projects