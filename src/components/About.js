import React from "react";
import tradeGraphic from "../images/tradeGraphic.jpeg";
import stakeGraphic from "../images/stakeGraphic.jpeg";
import pay from "../images/pay.jpeg";
import "../css/About.css";

const About = () => {
    return(
        <div className="about">
            <div className="about__tradeCopy">
                <div className="about__tradeContent">
                    <h1>Trade Like a Pro</h1>
                    <p>Discover trading opportunities across markets with our Advanced Trading interface.</p>
                    <p>
                        Make smarter trades with deep liquidity, powerful charting capabilites, and ultra-low 
                        fees you won't find on other crypto exchanges.
                    </p>
                    <button className="about__tradeBtn">Start Trading</button>
                </div>
                <img src={tradeGraphic} className="tradeImg"></img>
            </div>
            
            <div className="about__stakeCopy">
                <img src={stakeGraphic} className="stakeImg"></img>
                <div className="about__stakeContent">
                    <h1>Build Your Portfolio with Staking</h1>
                    <p>
                        Start staking cryptocurrencies. Support your favorite projects and help secure their 
                        blockchain network.
                    </p>
                    <p>
                        All crypto rewards passed onto you are generated by the protocols underlying each token 
                        eligible for staking.
                    </p>
                    <button className="about__stakeBtn">Earn Rewards</button>
                </div>
            </div>
            <div className="about__sendCopy">
                <div className="about__sendContent">
                    <h1>Send & Receive Crypto For Free</h1>
                    <p>
                        Use Pay on the Crypto Casino app to send, request, and recieve crypto instantly with zero 
                        transaction fees
                    </p>
                    <button>Download App to Pay</button>
                </div>
                <img src={pay} className="payImg"></img>
            </div>
            <div className="about__callingCopy">
                <h1>Crypto is Calling</h1>
                <p>
                    Join millions of investors and traders on the best crypto platform for low fees. Sign up today 
                    and buy your first crypto in as little as 2 minutes
                </p>
                <button>Sign Up</button>
            </div>

        </div>
    )
};

export default About;