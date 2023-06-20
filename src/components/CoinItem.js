import React from 'react'
import "../css/Coins.css";

const CoinItem = (props) => {
  return (
    <div className='coins__coinRow'>
        <p className='text-white'>{props.coins.market_cap_rank}</p> 
        <div className='coins__imgSymbol'>
            <img src={props.coins.image} alt='' />
            <p className='text-white'>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p className='text-slate-400'>${props.coins.current_price.toLocaleString()}</p>
        <p className='text-slate-400'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='coins__hideMobile text-slate-400'>${props.coins.total_volume.toLocaleString()}</p>
        <p className='coins__hideMobile text-slate-400'>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
}

export default CoinItem;