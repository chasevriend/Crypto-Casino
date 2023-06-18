import React from 'react'
import "../css/Coins.css";

const CoinItem = (props) => {
  return (
    <div className='coins__coinRow'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='coins__imgSymbol'>
            <img src={props.coins.image} alt='' />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>${props.coins.current_price.toLocaleString()}</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='coins__hideMobile'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='coins__hideMobile'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
}

export default CoinItem;