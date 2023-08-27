import React, { useState } from "react";
import "./Search.css";
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
const Serach = ({search,onSearchChange})=>{
     
    
    return(
        <div className="search_flex">
             <SearchTwoToneIcon />
            <input className="search_input" type="serach" placeholder="Search" value={search} onChange={(e)=>onSearchChange(e)} />
        </div>
    )
}

export default Serach;