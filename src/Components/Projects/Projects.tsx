import image from "./assets/i.webp"
import StackChips from '../StackChips/StackChips'
import "./Projects.css"
import htmlIcon from "./assets/html-icon.svg"
import cssIcon from "./assets/css-icon.svg"
import jsIcon from "./assets/js-icon.svg"
import tsIcon from "./assets/ts-icon.svg"
import reactIcon from "./assets/react-icon.svg"
import nodeIcon from "./assets/node-icon.svg"
import expressIcon from "./assets/express-icon.svg"
import mongoIcon from "./assets/mongo-icon.svg"
import figmaIcon from "./assets/figma-icon.svg"
import githubIcon from "./assets/github-icon.svg"
import liveIcon from "./assets/live-site-icon.svg"

type Stack = {
    name : string;
    color : string;
    iconPath : string;
}

const fullstackLanguages : Stack[] = [{
   name : "React.JS",
   iconPath : reactIcon,
   color : "#157AFB"
},
{
    name : "CSS",
    iconPath : cssIcon,
    color : "#1572B6"
 },
 {
    name : "Node.JS",
    iconPath : nodeIcon,
    color : "#3DA92E"
 },
 {
    name : "MongoDB",
    iconPath : mongoIcon,
    color : "#439934"
 },
 {
    name : "Figma",
    iconPath : figmaIcon,
    color : "#F24E1E"
 }
]

const mappedFullstackLanguages = fullstackLanguages.map(({color, iconPath, name})=>{
    return <StackChips name={name} iconPath={iconPath} color={color} key={Date.now()} />
})

function Projects() {
  return (
    <section className='projects-section'>
        <div className="inner-wrapper">

        <h1 className="main-heading">My Projects</h1>

        <div className="project">
            <img src={image} alt="project image" className="project-image" />
            <h1 className="project-title">Sauce : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, illum!</h1>

            <div className="stack-chips-container">
                {mappedFullstackLanguages}
            </div>

            <p className="project-description">Sauce is a web application designed to help you rediscover Anime, TV Shows and Movies you've forgotten. Just provide any description or fragmentary detail you remember and sauce finds it for you</p>

            <div className="buttons-container">
                <button className="sub-btn">
                    <img src={githubIcon} /> Source Code
                </button>

                <button className="primary-btn">
                <img src={liveIcon} /> Live Site 
                </button>
            </div>
        </div>

        <div className="project">
            <img src={image} alt="project image" className="project-image" />
            <h1 className="project-title">Sauce : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, illum!</h1>

            <div className="stack-chips-container">
                {mappedFullstackLanguages}
            </div>

            <p className="project-description">Sauce is a web application designed to help you rediscover Anime, TV Shows and Movies you've forgotten. Just provide any description or fragmentary detail you remember and sauce finds it for you</p>

            <div className="buttons-container">
                <button className="sub-btn">
                    <img src={githubIcon} /> Source Code
                </button>

                <button className="primary-btn">
                <img src={liveIcon} /> Live Site 
                </button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects