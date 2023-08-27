import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/Header";
import Tabs_Component from "../components/Dashboard/Tabs/tabs";
import axios from "axios";
import Back_to_top from "../components/Common/Back_to_top/Back_to_top";
import Loader from "../components/Common/Loader/Loader";
import Serach from "../components/Dashboard/Search/Search";
import { Get_100Coins } from "../functions/Get100coins";
import PaginationControlled from "../components/Dashboard/Pagination/pagination";
import Footer from "../components/Common/Footer/Footer";
const DashboardPage = ()=>{

   const [coins,setCoins] = useState([]);
   const [paginationcoins,setPaginationcoins] = useState([]);
   const [search,setSearch] = useState("");
   const [isLoading,setisLoading] = useState(true);
   const [page, setPage] = useState(1);
function onSearchChange(e){
    setSearch(e.target.value);
}     

   function handlePageChange(e,value){
         setPage(value);
         var prvIndex = (value-1)*10;
         setPaginationcoins(coins.slice(prvIndex,prvIndex+10));
   }
             

       const filter = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
   useEffect(()=>{
           get_data();
        
        },[]);
        const get_data = async () =>{
            const myCoins = await Get_100Coins();
            if(myCoins) {
                setCoins(myCoins);
                setPaginationcoins(myCoins.slice(0,10));
                setisLoading(false);
            }
        }

    return (
       <>
       <Header />
       <Back_to_top />
        {isLoading ?(
            <Loader />
        ) : (
            <div>
            
            <Serach serach = {search} onSearchChange={onSearchChange} />
            <Tabs_Component coins = {search ? filter : paginationcoins} />
            <PaginationControlled page={page} handlePageChange={handlePageChange} />
      
        </div>
        )}
        <Footer />
        </>
    )
}
export default DashboardPage;