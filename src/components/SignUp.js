import React from "react";
import { Link } from "react-router-dom";
import Bit from "../images/btc.png";
import Eth from "../images/eth.png"
import "../css/SignUp.css";

const SignUp = () => {
    return (
        <div className="signUp">
            <div className="signUp__container">
                <img src={Bit} alt="crypto currency" className="crypto bounce" />
                <span>
                    <h2 className="text-white">Track and Trade</h2>
                    <h2 className="signUp__text">Crypto Currencies</h2>
                    <Link to='/'>
                        <button className="signUp__btn">Begin Trading</button>
                    </Link>
                </span>
                <img src={Eth} alt="crypto currency" className="crypto bounce" />
            </div>
        </div>
    )
}

export default SignUp;