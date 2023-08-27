import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header/Header";
import Coin_info from "../components/Coin/Coin_info/Coin_info";
import List from "../components/Dashboard/List/List";
import { coinobject } from "../functions/coinobjects";
import Loader from "../components/Common/Loader/Loader";
import { getCoin_data } from "../functions/getCoin_data";
import { getCoin_price } from "../functions/getCoin_prices";
import BasicSelect from "../components/Coin/Select/Select";
 import LineChart from "../components/Coin/Line_chart/Line_chart";
 import { Chart_Data } from "../functions/Setting_chart_data";
 import TogglePriceType from "../components/Coin/Price_type/Price_type";
 import Footer from "../components/Common/Footer/Footer";


const CoinPage = () =>{
        const {id} = useParams();
        const [isLoading,setisLoading] = useState(true);
        const [coin_data,setCoin_data] = useState([]);
        const [chartData,setChartData] = useState([]);
        const [priceType, setpriceType] = useState("prices");

        const [days,setDays] = useState(30);
        useEffect(()=>{
            if(id) {
             getData();     
            
            }
        },[id]);
            
        async function getData () {
           const data = await getCoin_data(id);
           
       if(data){
         coinobject(setCoin_data,data);
       
         
            const prices = await getCoin_price(id, days,priceType);
            
            if (prices.length > 0) {
                console.log(prices);
               Chart_Data(setChartData,prices);
            }
            
            setisLoading(false);
        } 

        }
        const handleDaysChange = async(event) => {
            setisLoading(true);
            setDays(event.target.value);
            const prices = await getCoin_price(id, event.target.value,priceType);
            
            if (prices.length > 0) {
               Chart_Data(setChartData,prices);
               setisLoading(false);
            }           
        } 
        const handlePrice_typeChange = async (event, newType) => {
            setisLoading(true);
            setpriceType(newType);
            const prices = await getCoin_price(id,days,newType);
            
            if (prices.length > 0) {
               Chart_Data(setChartData,prices);
               setisLoading(false);
            } 
          };


     return (
        <div>
           <Header />
           {isLoading? <Loader /> : <>
       
       <div  className="gray_wrapping">
       <List coin={coin_data} />
       
       </div>
         
       <div  className="gray_wrapping">
       <BasicSelect days={days} handleDaysChange={handleDaysChange} Noptag={false} />
       <TogglePriceType priceType={priceType} handlePrice_typeChange = {handlePrice_typeChange} />
       <LineChart chartData={chartData} />
       </div>

       <Coin_info heding={coin_data.name} desc={coin_data.desc} />
           
           </>}
           <Footer />
        </div>
     )
}


export default CoinPage;