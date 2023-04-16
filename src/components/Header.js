import React from "react";
import { Link } from "react-router-dom";
import CasinoIcon from '@mui/icons-material/Casino';
import "../css/Header.css";

const Header = () => {
    return(
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="header__logo">
                    <CasinoIcon fontSize="large" className="header__icon" />
                    <h3>CryptoCasino</h3>
                </div>
            </Link>
            <div className="header__btns">
                <Link to='/markets' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="header__btn">
                        <h4>Markets</h4>
                    </div>
                </Link>
                <button className="header__joinBtn">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;