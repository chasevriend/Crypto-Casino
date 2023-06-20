import React, {useState, useEffect} from "react";
import axios from 'axios';
import Coins from "../components/Coins";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Markets = () => {
    const [coins, setCoins] = useState([])

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
        <div>
            <Nav /> 
            <Coins coins={coins} />
            <Footer />
        </div>
    )
}

export default Markets;