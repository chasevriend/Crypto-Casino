import React from "react";
import { Link } from "react-router-dom";
import "../css/SignUp.css";

const SignUp = () => {
    return (
        <div className="signUp">
            <div className="signUp__content">
                <h1>View Crypto Currencies</h1>
                <p>Securely view current market prices of 10 of the most popular Crypto Currencies.</p>
                <Link to="/markets">
                    <button className="signUp__btn">View Markets</button>
                </Link>
            </div>
        </div>
    )
}

export default SignUp;