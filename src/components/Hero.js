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
                        <h1 className='text-5xl text-white'>Let's Beat the Bear Market</h1>
                        <p className='text-xl text-white'>Crypto Casino is one of the world's leading social investment communities that 
                        allows people to grow their wealth.</p>
                        <button className='hero__btn rounded-full text-white hover:bg-green-600'>Start Investing</button>
                    </div>
                    <img src={HeroImg} className='hero__img' alt='' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero