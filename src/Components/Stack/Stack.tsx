import "./Stack.css"
import htmlIcon from "./assets/html-icon.svg"
import cssIcon from "./assets/css-icon.svg"
import jsIcon from "./assets/js-icon.svg"
import tsIcon from "./assets/ts-icon.svg"
import reactIcon from "./assets/react-icon.svg"
import nodeIcon from "./assets/node-icon.svg"
import expressIcon from "./assets/express-icon.svg"
import mongoIcon from "./assets/mongo-icon.svg"
import figmaIcon from "./assets/figma-icon.svg"

const stackInfo = [{
    name : "HTML",
    icon : htmlIcon
    },
    {
        name : "CSS",
        icon : cssIcon
    },
    {
        name : "JavaScript",
        icon : jsIcon
    },
    {
        name : "TypeScript",
        icon : tsIcon
    },
    {
        name : "React.JS",
        icon : reactIcon
    },
    {
        name : "Node.JS",
        icon : nodeIcon
    },
    {
        name : "Express.JS",
        icon : expressIcon
    },
    {
        name : "MongoDB",
        icon : mongoIcon
    },
    {
        name : "Figma",
        icon : figmaIcon
    }
]

function Stack(){
    const allStack = stackInfo.map(({icon, name})=>{
        return <div key={name} className="single-stack">
        <img src={icon} alt="icon" />
        
        <h2 className={name == "Figma" ? "italic" : ""}>{name}</h2>
    </div>
    })
    return(
        <section className="stack-section">
            <div className="inner-wrapper">

            <h1 className="main-heading">My Stack</h1>

            <div className="stack-container">
                {allStack}
            </div>

            </div>
        </section>
    )
}

export default Stack