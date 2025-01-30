import React from 'react'
import StackChips from '../StackChips/StackChips'

function Projects() {
  return (
    <section>
        <h1 className="main-heading">My Projects</h1>

        <div className="project">
            <img src="" alt="project image" />
            <h1 className="project-description">Sauce : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, illum!</h1>

            <div className="stack-chips-container">
                <StackChips />
                <StackChips />
                <StackChips />
            </div>

            <p>Sauce is a web application designed to help you rediscover Anime, TV Shows and Movies you've forgotten. Just provide any description or fragmentary detail you remember and sauce finds it for you</p>

            <div className="buttons-container">
                <button className="sub-button">
                    [github icon] Source Code
                </button>

                <button className="main-button">
                    [link icon] Live Site 
                </button>
            </div>
        </div>
    </section>
  )
}

export default Projects