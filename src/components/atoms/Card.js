import React from "react";

const Card = ({ heading, paragraph, imgUrl, projectLink, codeLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(88, 88, 88, 0), rgba(250, 250, 250, 0)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <div className="btns">
          <a
            href={projectLink ? projectLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Explore
          </a>
          <a
            href={codeLink ? codeLink : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Code
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Card
