import React, { useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Button from "../../Common/Button/button.js";
import Image from "../../images/cryptocurrency-logos.png"
import  Image2 from "..//..//images/phone_logo.jpg"
import { color, motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
const Main = ()=>{
 


    return (
   <div className="container">
     <div className= "main_div" >
     <motion.h1
          className="heading1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track Crypto
        </motion.h1>

        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
           style={{color : "var(--blue)"}}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!{" "}
        </motion.p>

       <motion.div
          className="btn-div"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <Link to="/dashboard">
            <Button text={"Dashboard"} />
          </Link>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Avi Vashishta using React JS.",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share App"} outlined={true} />
          </RWebShare>
        </motion.div>


</div>
          <div className="image">
         <img className="img_logo" src={Image} alt="Logo" />
          </div>
          <div className="low_image">
            <img className="img_phone" src= {Image2} alt="Logo" />
          </div>
   </div>
      

    )

}

export default Main;