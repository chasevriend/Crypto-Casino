import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css"

const Nav = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    }
    
    return(
        <>
            <nav>
                {/* mobile nav */}
                <div className={`mobile-nav ${nav ? "open-nav" : ""}`}>
                    <div onClick={openNav} className="mobile-nav__close">
                        <p className="mobile-nav__XBtn">X</p>
                    </div>
                    <ul className="mobile-nav__links">
                        <li>
                            <Link onClick={openNav} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/market">
                                Market
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Nav */}
                <div className="nav">
                    <div className="nav__left">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <h1 className="text-3xl text-white font-bold">Crypto Casino</h1>
                        </Link>
                    </div>
                    <div></div>
                    
                    <div className="nav__btns">
                        <Link className="nav__btnSignIn" to="/">
                            Home
                        </Link> 
                        <Link className="nav__btnSignIn" to="/about">
                            About
                        </Link>
                        <Link className="nav__btnSignIn" to="/markets">
                            Market
                        </Link>
                        <Link className="nav__btnRegister" to="/">
                            <button>
                                SIGN UP
                            </button>
                        </Link>
                    </div>

                    {/* mobile nav  */}
                    <div className="mobile-nav__hamburger" onClick={openNav}>
                        <svg viewBox="0 0 100 80" width="40" height="40" className="mobile-nav__hamburgerIcon">
                            <rect width="100" height="20"></rect>
                            <rect y="30" width="100" height="20"></rect>
                            <rect y="60" width="100" height="20"></rect>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;