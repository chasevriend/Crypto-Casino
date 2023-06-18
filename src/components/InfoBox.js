import { Icon } from '@mui/material';
import React from 'react'
import "../css/About.css";

const InfoBox = ({img, title, text}) => {
  return (
    <div className="infoBox">
        <img src={img}></img>
        <div className="infoBox__text">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
    
  )
}

export default InfoBox;