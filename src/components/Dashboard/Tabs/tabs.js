import React from 'react';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import Grid from '../Grid/Grid';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./tabs.css";
import List from '../List/List';


export default function Tabs_Component({coins}) {
  const [value, setValue] = useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 const style = {
    color : "var(--white)",
    fontSize : "1.2rem",
    fontWeight:600,
    fontFamily: "Inter",
    textTransform:"capitalize"

 }
  return (
    <div>
      <TabContext value={value}>
        <div >
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx = {style} />
            <Tab label="List" value="list" sx={style} />
           
          </TabList>
        </div 
        >
        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins?.length > 0?
            (coins.map((coin,i)=>{

              return(
                <Grid coin = {coin} key = {i} delay={(i % 4) * 0.2}  />
              );
              })) : 

              <div> 
                <h1 style={{ textAlign: "center" }}>
                  Sorry coin not found
                </h1>
              </div>
          }
          </div>
        </TabPanel>
        <TabPanel value="list">

          <table className='list_table'>
            {coins.map((item,i)=>{

              return(
                <List coin={item} key ={i}  />
              );
              
            })}
          </table>
        </TabPanel>

        
      </TabContext>
    </div>
  );
}
