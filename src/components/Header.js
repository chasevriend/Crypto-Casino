import React, { useState } from "react";
import { Link } from "react-router-dom";
import CasinoIcon from '@mui/icons-material/Casino';
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
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="header__logo">
                    <CasinoIcon fontSize="large" className="header__icon" />
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
    )
}

export default Header;