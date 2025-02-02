import "./Hero.css"
import menuIcon from "./assets/menu-icon.svg"
import resumeIcon from "./assets/resume-icon.svg"

function Hero(){
    return (
        <section className="hero-section">
            <div className="inner-wrapper">
            <header>
            <nav></nav>
            <button className="menu-btn">
                <img src={menuIcon} alt="menu icon" />
            </button>
        </header>

        <h1>Fullstack Web Developer & <span className="italic">User Interface Designer</span></h1>

        <p>Hey there! I am Emmanuel Nsikan-David, a fullstack developer with a strong focus on frontend development. I design and build web applications that not only look good but are easy to use</p>

        <button className="primary-btn">
            <img src={resumeIcon} alt="resume-icon" /> 
            Resume
            </button>
            </div>
        </section>
    )
}

export default Hero