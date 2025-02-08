import StackChips from "../StackChips/StackChips";
import "./SingleProject.css"
import githubIcon from "./assets/github-icon.svg"
import liveIcon from "./assets/live-site-icon.svg"
import "./SingleProject.css"

type Stack = {
    name : string;
    color : string;
    iconPath : string;
}

interface SingleProjectInterface  {
    projectImage : string;
    projectTitle : string;
    projectDescription : string;
    githubLink : string;
    liveSiteLink : string;
    languagesArray : Stack[];
}

function SingleProject({projectTitle, githubLink, languagesArray, liveSiteLink, projectDescription, projectImage} : SingleProjectInterface) {
    const mappedFullstackLanguages = languagesArray.map(({color, iconPath, name}, i)=>{
        return <StackChips name={name} iconPath={iconPath} color={color} key={i} />
    })
  return (
    <div className="project">
    <img src={projectImage} alt="project image" className="project-image" />
    <h1 className="project-title">{projectTitle}</h1>
    <div className="stack-chips-container">
        {mappedFullstackLanguages}
    </div>

    <p className="project-description">{projectDescription}</p>

    <div className="buttons-container">
        <a href={githubLink}>
        <button className="sub-btn">
            <img src={githubIcon} /> Source Code
        </button>
        </a>

        <a href={liveSiteLink}>
        <button className="primary-btn">
        <img src={liveIcon} /> Live Site 
        </button>
        </a>
    </div>
</div>
  )
}

export default SingleProject