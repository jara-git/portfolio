import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Programming</h1>
          <p>User Interface Integration
          #HTML5 #CSS3 # SCSS #Bootstrap #VanillaJS3.
          Database development and implementation | SQL | NoSQL#JS
          Use third party API #React
          Develop and document a server #API #Node #Express #Rest
          SEO
          Collaboration | Communication #Git#SCRUM</p>
          <div className="skills-grid">
            {data.skills.map(skill => (
              <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
