
import React from 'react';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./Selectc.css"
export default function BasicSelect({days,handleDaysChange, Noptag}) {

  return (
      <div className='select_box'>
        {!Noptag && 
          <h2>Price change in last</h2>}
        
        <Select
        
        sx={{
          height:"2.5rem",
color: "var(--white)",
"& .MuiOutlinedInput-notchedOutline": {
borderColor: "var(--white)",
},
"& .MuiSvgIcon-root": {
color :"var(--white)",
},
"& .hover": {
"$$ fieldset" :{
  borderColor:"3a80e9",
},
},
}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={10}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
        </Select>
    
    </div>
  );
}