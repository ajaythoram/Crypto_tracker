import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Compare_select from "../components/Compare_coins/Select_coins/Select_coins";
import { coinobject } from "../functions/coinobjects";
import BasicSelect from "../components/Coin/Select/Select";
import { getCoin_price } from "../functions/getCoin_prices";
import { getCoin_data } from "../functions/getCoin_data";
import List from "../components/Dashboard/List/List";
import Coin_info from "../components/Coin/Coin_info/Coin_info";
import Loader from "../components/Common/Loader/Loader";
import { Chart_Data } from "../functions/Setting_chart_data";
import LineChart from "../components/Coin/Line_chart/Line_chart";
import { Get_100Coins } from "../functions/Get100coins";
import TogglePriceType from "../components/Coin/Price_type/Price_type";

import Footer from "../components/Common/Footer/Footer";



const Compare = ()=>{
    
    const [coin1,setCoin1] = useState("bitcoin");
    const [coin2,setCoin2] = useState("ethereum");
    const [days,setDays] = useState(30);
    const [allcoins,setAllcoins] = useState([]);
    const [isLoading,setisLoading] = useState(true);
    const [coin1_data,setCoin1_data] = useState({});
    const [coin2_data,setCoin2_data] = useState({});
    const [price_type,setPrice_type] = useState("prices");
    const [chart_data,setChart_data] = useState({
        labels:[],
        datasets:[],
    }); 

   
   useEffect(()=>{
    getData();
   },[]);

   async function getData() {
            setisLoading(true);
            const coin100 = await Get_100Coins();
            if(coin100){
                setAllcoins(coin100);
            const data1 = await getCoin_data(coin1);
            const data2 = await getCoin_data(coin2);
                coinobject(setCoin1_data,data1);
                coinobject(setCoin2_data,data2);
            
            if(data1 && data2){
                const prices1 = await getCoin_price(coin1,days,price_type);
                const prices2 = await getCoin_price(coin2,days,price_type)
           
               Chart_Data(setChart_data,prices1,prices2);
                setisLoading(false);
              
            }
            }
   }

   const handleCoinChange = async(event,isCoin2) =>{
      setisLoading(true);
    if(isCoin2){
        
        const newCrypto2 = event.target.value;
        setCoin2(newCrypto2);
        const data2 = await getCoin_data(newCrypto2);
            coinobject(setCoin2_data,data2);
            const prices1 = await getCoin_price(coin1,days,price_type);
            const prices2 = await getCoin_price(newCrypto2,days,price_type);
           Chart_Data(setChart_data,prices1,prices2);
                setisLoading(false);
                
                console.log("price1 ==>",prices1,prices2)
        
    }
        else{
            const newCrypto1 = event.target.value;
            setCoin1(newCrypto1);
             console.log(coin1);
            const data1 = await getCoin_data(newCrypto1);
            coinobject(setCoin1_data,data1);
            const prices1 = await getCoin_price(newCrypto1,days,price_type);
            const prices2 = await getCoin_price(coin2,days,price_type);
            Chart_Data(setChart_data,prices1,prices2);
        }
    
                setisLoading(false);
    }
    async function handleDaysChange(event){
        setisLoading(true);
        setDays(event.target.value);
        const prices1 = await getCoin_price(coin1,event.target.value,price_type);
            const prices2 = await getCoin_price(coin2,event.target.value,price_type);
          Chart_Data(setChart_data,prices1,prices2);
          setisLoading(false);
       }

      /* async function handlePriceChange(e){
        setisLoading(true);
        setPrice_type(e.target.value);
        const prices1 = await getCoin_price(coin1,days,e.target.value);
        const prices2 = await getCoin_price(coin2,days,e.target.value);
      Chart_Data(setChart_data,prices1,prices2);
      setisLoading(false);
       } */

    return (
        <div>
            <Header />

            {isLoading ?<Loader /> :(<>
          <div className="compare_header">
          <Compare_select 
          coin1={coin1} 
          coin2={coin2} 
          handleCoinChange={handleCoinChange}
          days={days}
          handleDaysChange={handleDaysChange}
          />
          
          <BasicSelect days={days} handleDaysChange={handleDaysChange} Noptag={true} />
          </div>
          <div  className="gray_wrapping">
       <List coin={coin1_data} />
       
       </div>
       <div  className="gray_wrapping">
       <List coin={coin2_data} />
       </div>
 
         <div className="gray_wrapping">
          { /* <TogglePriceType
             price_type={price_type}
             handlePriceChange={handlePriceChange}
            /> */}
         <LineChart chartData={chart_data} multiAxis={true} />
         </div>
      
       <Coin_info heding={coin1_data.name} desc={coin1_data.desc} />
       <Coin_info heding={coin2_data.name} desc={coin2_data.desc} />
       </>)}
       <Footer />
        </div>
        
    )
}

export default Compare;