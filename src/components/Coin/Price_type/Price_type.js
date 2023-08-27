
import  React from 'react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./Price_type.css";
export default function TogglePriceType({priceType,handlePrice_typeChange}) {
  

  return (
    
    <div className='toggle_prices'>
        <ToggleButtonGroup
     sx={
        {
           "& .Mui-selected":{
            color: "var(--blue) !important",
           },
           borderColor:"var(--blue)",
           border:"unset !important",
           "& .MuiToggleButtonGroup-grouped":{
            border:"1px solid !important",
            borderBlockColor:"unset",
            color:"var(--blue)",
           },
           "& .MuiToggleButton-standard":{
            color:"var(--blue)",
           },
        }
     }
        
     
      value={priceType }
      exclusive
      onChange={
        handlePrice_typeChange
      }
      
    >
      <ToggleButton value="prices"  className='toggle_btn' >
        Price
      </ToggleButton>
      <ToggleButton value="market_caps"  className='toggle_btn'>
        Market_Cap
      </ToggleButton>
      <ToggleButton value="total_volumes"  className='toggle_btn'>
        Total_Volume
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}