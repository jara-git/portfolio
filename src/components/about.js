import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import profilePic from "../images/profile-pic.svg"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
              <br></br>
              <br></br>
              {data.aboutParaFour}
            </p>
          </div>
          <div className="image-wrapper">
            <img className="profile-pic" src={profilePic} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
