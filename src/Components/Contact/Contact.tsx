import "./Contact.css"
import emailIcon from "./assets/email-icon.svg"
import githubIcon from "./assets/github-icon-large.svg"
import twitterIcon from "./assets/twitter-icon.svg"
import viewMoreIcon from "./assets/view-more-icon.svg"

function Contact() {
  const contactInfo = [{
    icons : emailIcon,
    text : "Send me an Email",
    to : "mailto:en56434@gmail.com"
  },
  {
    icons : twitterIcon,
    text : "Message me on Twitter",
    to : "https://x.com/daviddixx"
  },
  {
    icons : githubIcon,
    text : "Check out my Github",
    to : "https://github.com/daviddix"
  }
  ]

  const mappedContactInfo = contactInfo.map((info)=>{
    return <div 
    key={info.icons}
    className="single-contact">
      <div className="contact-icon">
        <img src={info.icons} />
      </div>
      <a href={info.to}>{info.text}</a>
      <img src={viewMoreIcon} className="view-more" />
    </div>
  })
  return (
    <section className="contact-section">
      <div className="inner-wrapper">

        <h1 className="main-heading">Contact Me</h1>

        {mappedContactInfo}

        <p className="copyrite">
            c2025. Built & Designed by Emmanuel Nsikan-David
        </p>
      </div>
    </section>
  )
}

export default Contact