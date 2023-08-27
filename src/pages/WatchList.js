import React from "react";
import Button from "../components/Common/Button/button";
import Header from "../components/Common/Header/Header";
import Tabs_Component from "../components/Dashboard/Tabs/tabs";
import { Get_100Coins } from "../functions/Get100coins";
import { useState,useEffect } from "react";
import Footer from "../components/Common/Footer/Footer";

function WatchList(){
    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [coins, setCoins] = useState([]);
  
    useEffect(() => {
      if (watchlist) {
        getData();
      }
    }, []);
  
    const getData = async () => {
      const allCoins = await Get_100Coins();
      if (allCoins) {
        setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
      }
    };
  
    return (
      <div>
        <Header />
        {watchlist?.length > 0 ? (
          <Tabs_Component coins={coins} />
        ) : (
          <div>
            <h1 style={{ textAlign: "center" }}>
              Sorry, No Items In The Watchlist.
            </h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2rem",
              }}
            >
              <a href="/dashboard">
                <Button text="Dashboard" />
              </a>
            </div>
          </div>
        )}
        <Footer />
      </div>
    );
}

export default WatchList;