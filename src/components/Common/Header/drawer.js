import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer() {
 

    let [open,setOpen] = useState(false)
  return (
    <div>
    
          <IconButton onClick={()=>{setOpen(true)}}>
          <MenuRoundedIcon className='link' />
          </IconButton>
          <Drawer anchor='right' open={open} onClose={()=>setOpen(false)} >

          <div id='drawer_menu'>
          <Link to="/">
                <p className="link">Home</p>
                </Link>
              <Link to="/compare">
                <p className="link">Compare</p>
                </Link>
              <Link to="/dashboard">
                <p className="link">Dashboard</p>
                </Link>
                <Link to="/watchlist">
                <p className="link">WatchList</p>
                </Link>
          </div>
          
           
          </Drawer>
        
    </div>
  );
}