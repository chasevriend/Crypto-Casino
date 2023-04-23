import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    
    const [sticky, setSticky] = useState(false);
    const [mobile, setMobile] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    }

    window.addEventListener("scroll", handleScroll);

    const goToTop = () => {
        window.scrollTo({
            top: (0, 0),
            behavior: "smooth",
        });
    };

    const openMobile = () => {
        setMobile(!mobile);
    }
    
    
    return(
        <>
            <nav className={sticky ? "sticky-nav" : ""}>
                <div className="header" >
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="header__logo">
                            <h3>CryptoCasino</h3>
                        </div>
                    </Link>
                    <div className="header__btns">
                        <ul>
                            <li><a href="#/">Home</a></li>
                            <li><a href="#/Market">Market</a></li>
                            <li><a href="#/WhyUs">Choose Us</a></li>
                        </ul>
                        <button className="header__joinBtn">Sign Up</button>
                    </div>
                </div>
            </nav>

            {/* mobile nav */}
            {/* <div className={`mobile-nav ${mobile ? "mobile-up" : ""}`}>
                <i onClick={openMobile} className="fa-solid fa-xmark close-mobile"></i>
                <ul>
                    <li onClick={openMobile}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={openMobile}>
                        <a href="#market">Market</a>
                    </li>
                    <li onClick={openMobile}>
                        <a href="#choose-us">Choose Us</a>
                    </li>
                </ul>
            </div> */}
        </>
    )
}

export default Header;