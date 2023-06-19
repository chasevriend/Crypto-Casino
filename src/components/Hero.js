import React from 'react';
import "../css/Hero.css";
import HeroImg from "../images/hero.png";

const Hero = () => {
  return (
    <>
        <section id='hero'>
            <div className='hero'>
                <div className='hero__container'>
                    <div className='hero__content'>
                        <h1>Invest in Crypto</h1>
                        <p>Crypto Casino is one of the world's leading social investment communities that 
                        allows people to grow their knowledge</p>
                        <button className='hero__btn'>Start Investing</button>
                    </div>
                    <img src={HeroImg} className='hero__img' alt='' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero