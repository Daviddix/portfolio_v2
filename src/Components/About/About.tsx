import "./About.css"
import myImage from "./assets/me-small.png"

function About() {
  return (
    <section 
    id="about"
    className='about-section'>
      <div className="inner-wrapper">

        <h1 className="main-heading">About Me</h1>

        <div className="about-container">
        <div className="about-text">

        <h2 className="sub-heading">Hey there 👋🏾</h2>

        <p className="my-description">I am Emmanuel Nsikan-David, a student currently studying Computer Science. I have a deep passion for technology, from web development to theoretical computer science and everything in between.
<br />
<br />
I also enjoy watching anime, TV shows, and documentaries. In my free time, I like cooking, playing games like Dream League Soccer, and watching tech gadget reviews.
<br />
<br />
I run a small but growing <a target="_blank" href="https://www.youtube.com/@daviddixx6737"><b>YouTube channel</b></a> where I share demos of my projects and other tech-related content. Currently, I am interested in learning more about building scalable web applications, artificial intelligence, and applying blockchain technology to real-world use cases.</p>

        </div>
 

        <img src={myImage} alt="image of Nsikan" className="my-image" />

        </div>


      </div>

    </section>
  )
}

export default About