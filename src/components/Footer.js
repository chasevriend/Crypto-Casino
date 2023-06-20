import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
    return (
        <section id='footer'>
            <div className='footer'>
                <div className='footer__content'>
                    <div className='footerCell'>
                        <h2><b>Crypto Casino</b></h2>
                        <p className='text-slate-400'>Unlock the extraordinary and expand 
                        your wealth with Crypto Casino.</p>
                    </div>
                    <div className='footerCell'>
                        <h2>Company</h2>
                        <Link to='/' className="text-slate-400">
                            Los Angeles
                        </Link>
                        <Link to='/' className="text-slate-400">
                            Careers
                        </Link>
                        <Link to='/' className="text-slate-400">
                            Mobile
                        </Link>
                        <Link to='/' className="text-slate-400">
                            How we work
                        </Link>
                    </div>
                    <div className='footerCell'>
                        <h2>Working Hours</h2>
                        <p className="text-slate-400">Mon - Fri: 9AM - 9PM</p>
                        <p className="text-slate-400">Sat - Sun: 10AM - 6PM</p>
                    </div>
                    <div className='footerCell'>
                        <h2>Subscription</h2>
                        <p className="text-slate-400">Subscribe your email address for latest news & updates.</p>
                        <input type='text' placeholder='Enter Email Address' />
                        <button className='footerCell__btn'>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;