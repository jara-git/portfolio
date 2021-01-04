import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>
              <span>{data.promotionHeading}</span>
              <span>{data.promotionSubHeading}</span>
              <span>{data.promotionSubsubHeading}</span>
              <span>{data.promotionSubsubsubHeading}</span>
            </h1>
            <p>- Mary Ritter Beard </p>
          </Fade>
          <p>{data.promotionPara}</p>
        </div>
      </div>
    </div>
  )
}

export default Promotion
