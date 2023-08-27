
import axios from "axios";
export const getCoin_data  = (id)=>{

  const myData =  axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
              .then((response)=>{
                   return response.data;
              })
              .catch((error) =>{
                console.log(error);
              });
              return myData;

}