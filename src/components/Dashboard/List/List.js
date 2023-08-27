import React from "react";
import  "./List.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { saveItemToWatchlist } from "../../../functions/addItemtoWatchlist";
import { removeItemToWatchlist } from "../../../functions/removeItemtoWatchlits";
import { useState } from "react";
import { motion } from "framer-motion";
const List = ({coin,delay})=>{
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));
    return(
        <Link to = {`/coin/${coin.id}`} >
      
      <motion.tr
        className="list_row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
            <Tooltip title = "Logo" placement="bottom-start">
            <td className="list_img">
                    <img  src={coin.image }alt="logo"/>
                    </td>
                    </Tooltip>
                    <td>
                    <div className="card_title">
                   <Tooltip title="Symbol" placement="bottom-start">
                   <p className="coin_id">{coin.symbol}</p>
                   </Tooltip>
                        <Tooltip title="Name" placement="bottom-start" >
                        <p className="coin_name">{coin.name}</p>   
                            </Tooltip>  
                    </div>
            </td>
            
            {coin.price_change_percentage_24h > 0 ?(
            <td className="chip_flex">
                <div className="price_chip" >
                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                    
                </div> 
                      
                <div className="icon_green icon" >
           <TrendingUpRoundedIcon />                    
                </div>   
            </td>
            ):(
                <td className="chip_flex">
                <div className="price_chip chip_red"  >
                    {coin?.price_change_percentage_24h?.toFixed(2)}%
                    
                </div>
                <div className="icon_red icon" >
             <TrendingDownRoundedIcon />                    
                </div>
                
            </td>
            )}

            <Tooltip title = "Current Price"  >
            <td className="price_flex" style={{textAlign: "center"}}>
                <h1 className={coin?.price_change_percentage_24h > 0 ? "price" : "price_red"} >${coin?.current_price?.toLocaleString()}</h1>
            </td>
            </Tooltip>
            <Tooltip title="Total volume" placement="bottom-start" >
            <td>
            <p className="td_right total_volume">{coin.total_volume}</p>
                
            </td>
            </Tooltip>
            <Tooltip title = "Markte cap" placement="bottom-start" >
            <td className="total_market">
            <p className="td_right market_cap">${coin.market_cap}</p>
            </td>
            </Tooltip>
            <td
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
        </td>
            
        </motion.tr>
      </Link>
    )
  
}

export default List;