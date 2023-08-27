import React from "react";
import "./Grid.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { saveItemToWatchlist } from "../../../functions/addItemtoWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemtoWatchlits";
import { motion } from "framer-motion";
import { useState } from "react";
const Grid = ({coin,delay})=>{
        console.log(coin);

        const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
    return(
      <Link to={`/coin/${coin.id}`}>
       <motion.div
        className={`grid ${coin.price_change_percentage_24h < 0 && "grid-red"}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
      <div className={coin.price_change_percentage_24h > 0 ? "card" : "card_red"}>
            <div className="card_top">
                    <img  src={coin.image }alt="logo"/>
                    <div className="card_title">
                    <p className="coin_id">{coin.symbol}</p>
                        <p className="coin_name">{coin.name}</p>     
                    </div>
                    <div
              className={`watchlist-icon ${
                coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
              }`}
              onClick={(e) => {
                if (isCoinAdded) {
                  // remove coin

                  removeItemToWatchlist(e, coin.id, setIsCoinAdded);
                } else {
                  setIsCoinAdded(true);
                  saveItemToWatchlist(e, coin.id);
                }
              }}
            >
              {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
            </div>

                
            </div>
            {coin.price_change_percentage_24h > 0 ?(
            <div className="chip_flex">
                <div className="price_chip" >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    
                </div>     
                <div className="icon_green" >
           <TrendingUpRoundedIcon />                    
                </div>   
            </div>
            ):(
                <div className="chip_flex">
                <div className="price_chip chip_red" >
                    {coin.price_change_percentage_24h.toFixed(2)}%
                    
                </div>
                <div className="icon_red" >
             <TrendingDownRoundedIcon />                    
                </div>
                
            </div>
            )}

            <div className="price_flex" >
                <h1 className={coin.price_change_percentage_24h > 0 ? "price" : "price_red"} >${coin.current_price.toLocaleString()}</h1>
                <p>Total Volume:{coin.total_volume}</p>
                <p>Market Cap:${coin.market_cap}</p>

            </div>
            
        </div>
        </motion.div>
      </Link>
    );
}

export default Grid;