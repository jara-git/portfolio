import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../yourdata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                  codeLink={project.codeurl}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
      <div>
        <p className="request-info">More details, sketches, prototypes, UXQ, flow charts available on request.</p>
      </div>
    </div>
  )
}

export default Work
