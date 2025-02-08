import "./About.css"
import meSvg from "./assets/me.svg"

function About() {
  return (
    <section className='about-section'>
      <div className="inner-wrapper">

        <h1 className="main-heading">About Me</h1>
 
        <h2 className="sub-heading">Hey there 👋🏾</h2>

        <p className="my-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium cumque modi voluptate odit quibusdam iste dolores ex quisquam possimus? Maiores, numquam eaque. Impedit corporis dolore quod, perspiciatis, minima dolor corrupti repudiandae commodi reiciendis delectus aliquid expedita dignissimos nulla. Voluptate reprehenderit cupiditate sed doloribus explicabo eaque sapiente blanditiis ratione veritatis aut autem error nam odit quidem, exercitationem ipsa, ipsum porro deserunt laudantium possimus aliquid. Perferendis molestiae ratione assumenda dignissimos quidem sit maxime mollitia quia, sunt necessitatibus nobis ut, tempora vero odit.</p>

        <img src={meSvg} alt="image of Nsikan" className="my-image" />

      </div>

    </section>
  )
}

export default About