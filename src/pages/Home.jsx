import React, {useEffect, useState} from "react";
import Nav from "../components/Nav";
import SignUp from "../components/SignUp";
import About from "../components/About";
import Footer from "../components/Footer";
import Coins from "../components/Coins";
import axios from 'axios';
import Title from "../components/Title";
import Hero from "../components/Hero";

const Home = () => {
    const [coins, setCoins] = useState([]);

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
  
    useEffect(() => {
      axios.get(url).then((response) => {
        setCoins(response.data)
        console.log(response.data[0])
      }).catch((error) => {
        console.log(error)
      })
    }, [])
    
    
    return(
        <div className="home">
            <Nav />
            <Hero />
            <About /> 
            {/* <Coins coins={coins} /> */}
            {/* <SignUp /> */}
            {/* <Footer /> */}

        </div>
    )
}

export default Home;

// about, banner, reviews, footer