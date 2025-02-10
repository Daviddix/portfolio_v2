import "./Hero.css"
import menuIcon from "./assets/menu-icon.svg"
import resumeIcon from "./assets/resume-icon.svg"
import resume from "./assets/resume.pdf"
import meIcon from "./assets/me-icon.png"

function Hero(){
    return (
        <section id="home" className="hero-section">
            <div className="inner-wrapper">
            <header>
            <nav>
                <ul>
                <button>X</button>

                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <img src={meIcon} alt="image of Nsikan-David" />
                    <a href="#about">About</a>
                    <a href="#contact">Contact Me</a>
                </ul>
            </nav>
            <button className="menu-btn">
                <img src={menuIcon} alt="menu icon" />
            </button>
        </header>

<div className="hero-text-container">
        <h1>Fullstack Web Developer & <span className="italic">User Interface Designer</span></h1>

        <p>Hey there! I am Emmanuel Nsikan-David, a fullstack developer with a focus on frontend development. I design and build web applications that not only look good but are easy to use</p>

        <a href={resume} target="_blank" rel="noopener noreferrer">
        <button className="primary-btn">
            <img src={resumeIcon} alt="resume-icon" /> 
            Resume
            </button>
        </a>

</div>
            </div>
        </section>
    )
}

export default Hero