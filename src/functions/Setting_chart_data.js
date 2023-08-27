
import { CoinDate } from "./convert_date";
export const Chart_Data = (setChartData,prices1,prices2)=>{

    if(prices2){
        setChartData({
            labels:prices1?.map((price) => CoinDate(price[0])),
            datasets : [
               { 
                label: "Coin 1",
                data : prices1?.map((price) =>(price[1])),
                     borderWidth : 1,
                     fill:false,
                     tension:0.25,
    
                borderColor :"#3a80e9",
                pointRadius:0,
                yAxisID: "coin1",
            },
            
             {
                label: "Coin 2",
                data : prices2?.map((price) =>(price[1])),
                borderWidth : 1,
                fill:false,
                tension:0.25,

           borderColor :"#61c96f",
           pointRadius:0,
           yAxisID: "coin2",
       
       },
            
    
            ],
        });
    }
    else{
        setChartData({
            labels:prices1?.map((price) => CoinDate(price[0])),
            datasets : [
               { data : prices1?.map((price) =>(price[1])),
                     borderWidth : 1,
                     fill:true,
                     tension:0.25,
    
                borderColor :"#3a80e9",
                backgroundColor :"rgba(58,128,233,0.1)",
                pointRadius:0,
            
            },
    
            ],
        });
    }
   
}