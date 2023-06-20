import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Nav from './Nav';
import DOMPurify from 'dompurify';
import "../css/Coin.css";


const Coin = () => {
    const params = useParams()
    const [coin, setCoin] = useState({})
    
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
  
    return (
        <>
            <Nav />
            <div className='coin'>
                <div className='coin__container'>
                    <div className='coin__header'>
                        <h1>{coin.name}</h1>
                    </div>
                    <div className='coin__content'>
                        <div className='coin__info'>
                            <div className='coin__infoHeading'>
                                {coin.image ? <img src={coin.image.small} alt='' /> : null}
                                <p>{coin.name}</p>
                                <p className='coin__infoTicker'>{coin.symbol}</p>
                            </div>
                            <div className='coin__price'>
                                <h1>$</h1>{coin.market_data?.current_price ? <h1>{coin.market_data.current_price.usd}</h1> : null}
                            </div>
                        </div>
                    </div>

                    <div className='coin__content'>
                        <table>
                            <thead>
                                <tr>
                                    <th>1h</th>
                                    <th>24h</th>
                                    <th>7d</th>
                                    <th>14d</th>
                                    <th id='mobile'>30d</th>
                                    <th id='mobile'>1y</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{coin.market_data?.price_change_percentage_1h_in_currency.usd ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd}%</p> : null}</td>
                                    <td>{coin.market_data?.price_change_percentage_24h_in_currency.usd ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd}%</p> : null}</td>
                                    <td>{coin.market_data?.price_change_percentage_7d_in_currency.usd ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd}%</p> : null}</td>
                                    <td>{coin.market_data?.price_change_percentage_14d_in_currency.usd ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd}%</p> : null}</td>
                                    <td id='mobile'>{coin.market_data?.price_change_percentage_30d_in_currency.usd ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd}%</p> : null}</td>
                                    <td id='mobile'>{coin.market_data?.price_change_percentage_1y_in_currency.usd ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd}%</p> : null}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='coin__content'>
                        <div className='coin__stats'>
                            <div className='coin__left'>
                                <div className='coin__row'>
                                    <h4>24 Hour Low</h4>
                                    {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd}</p> : null}
                                </div>
                                <div className='coin__row'>
                                    <h4>24 Hour High</h4>
                                    {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd}</p> : null}
                                </div>
                            </div>
                            <div className='coin__right'>
                                <div className='coin__row'>
                                    <h4>Market Cap</h4>
                                    {coin.market_data?.market_cap.usd ? <p>${coin.market_data.market_cap.usd}</p> : null}
                                </div>
                                <div className='coin__row'>
                                    <h4>Circulating Supply</h4>
                                    {coin.market_data?.circulating_supply ? <p>{coin.market_data.circulating_supply}</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='coin__content'>
                        <div className='coin__about'>
                            <h3>About</h3>

                            <p dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(coin.description ? coin.description.en : '')
                            }}>

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Coin;