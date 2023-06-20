import React from "react";
import "../css/About.css";
import PaymentIcon from '@mui/icons-material/Payment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import LockIcon from '@mui/icons-material/Lock';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const About = () => {

    return(
        <>
            <section id="about">
                <div className="about">
                <h2 className="text-center text-white font-bold text-4xl">Trusted worldwide</h2>
                <p className="p-10 text-center text-white font-bold text-xl">Discover why millions of investors from every country 
                ever joined our exchange</p>
                    <div className="about__container">
                        <div className="about__cell">
                            <VerifiedUserIcon fontSize="large" className="currentColor" />
                            <p>Protection</p>
                            <p>Don't worry. Your account is totally safe with our industry-leading 
                            security systems.</p>
                        </div>
                        <div className="about__cell">
                            <LockIcon fontSize="large" className="currentColor" />
                            <p>Privacy</p>
                            <p>We never share your private and sensitive information without your 
                            permission.</p>
                        </div>
                        <div className="about__cell">
                            <ThumbUpIcon fontSize="large" className="currentColor" />
                            <p>Reputation</p>
                            <p>With a decade of experience, Crypto Casino continues to be an 
                            industry leader.</p>
                        </div>
                        <div className="about__cell">
                            <PaymentIcon fontSize="large" className="currentColor" />
                            <p>Cash</p>
                            <p>Your cash is safe from Crypto Casino's and is held at trustworthy 
                            institutions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default About;