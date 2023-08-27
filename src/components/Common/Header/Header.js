import React from "react";
import './Header.css';
import TemporaryDrawer from "./drawer";
import { Link } from "react-router-dom";
import Button from "../Button/button.js";
const Header = ()=>{

    return(

        <div className="nav_bar">

            <h1 id="logo">CryptoTracker<span style={{color:"var(--blue)"}}>.</span> </h1>
            <div id="links">
              <Link to="/">
                <p className="link">Home</p>
                </Link>
              <Link to="/compare">
                <p className="link">Compare</p>
                </Link>
                <Link to="/watchlist">
                <p className="link">WatchList</p>
                </Link>
              <Link to="/dashboard">
                <Button text = {"Dashboard"}  />
                </Link>
                
            </div>
            <div className ="mobile_drwaer" >
                <TemporaryDrawer />
            </div>
            
        </div>
    )
}
export default Header;