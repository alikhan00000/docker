import * as React from "react"

const Card = (props) => (
  
<div className={`card ${props.CardClass}`}>

  <figure>
    {props.CardImgSrc}
  </figure>
  <div className="card-section">
    {props.CardTitle}
    {props.CardText}
    
    {props.CardButton}
  </div>
  {props.CardSiteLink}
</div>

)

export default Card