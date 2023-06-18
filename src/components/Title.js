import React from 'react';
import "../css/Title.css";
import btc from "../images/btc.png";
import eth from "../images/eth.png";

export const Title = () => {
  return (
    <div className="about__header">
        <img src={btc} className="crypto bounce" alt=""/>
        <div>
            <h1>TRACK AND TRADE</h1>
            <h1 className="about__cryptoText" id='mobile-min'>CRYPTO CURRENCIES</h1>
        </div>
        <img src={eth} className="crypto bounce" alt=''/>
    </div>
  )
}

export default Title;
