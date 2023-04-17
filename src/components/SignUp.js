import React from "react";
import hero from "../images/hero-video.mp4";
import "../css/SignUp.css";

const SignUp = () => {
    return (
        <div className="signUp">
            <div className="signUp__content">
                <h1>Buy, Sell & Trade CryptoCurrencies</h1>
                <p>Securely buy crypto and earn rewards with staking. Sign up to trade & gamble today.</p>
            </div>
            <div className="signUp__graphic">
                <hero width="750" height="500" controls >
                    
                </hero>
            </div>
        </div>
    )
}

export default SignUp;