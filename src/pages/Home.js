import React from "react";
import Header from "../components/Common/Header/Header";
import Main from "../components/LandingPage/Mainpage/main";
import Tab_Component from "../components/Dashboard/Tabs/tabs";
import Footer from "../components/Common/Footer/Footer";

const Homepage = () =>{

    return(
        <div>
          <Header />
         <Main />
        <Footer />
        </div>
    )
}

export default Homepage;