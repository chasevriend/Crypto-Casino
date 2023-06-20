import React from 'react'
import CoinItem from './CoinItem';
import Coin from './Coin';
import { Link } from 'react-router-dom';
import "../css/Coins.css";

const Coins = (props) => {
  return (
    <div className='coins'>
        <div> 
            <h1 className='text-white text-center font-bold text-4xl p-7'>Current Markets</h1> 
            <div className='coins__heading'>
                <p>#</p> 
                <p className='coins__coinName'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='coins__hideMobile'>Volume</p>
                <p className='coins__hideMobile'>Market Cap</p>
            </div>

            {props.coins.map(coins => {
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem coins={coins} />
                    </Link>
                )
            })}

        </div>
    </div>
  )
}

export default Coins;