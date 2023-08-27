import React, { useState } from "react";
import "./Coin_info.css"


const Coin_info = ({heding,desc})=>{
     console.log(heding,desc);
    const short_desc = desc?.slice(0,200) + "<p style='color:var(--grey)'> Read more... </p>";
    const long_desc = desc + "<p style='color:var(--grey)'> Read less... </p>";
    const [flag,setflage] = useState(false);

    return (

        <div className="gray_wrapping">
     <h2 className="coin-info-heading">{heding}</h2>   
     { desc?.length > 200 ?(
     <p   
         onClick={()=> setflage(!flag)}
     className="coin-info-desc" 
      dangerouslySetInnerHTML={{__html:!flag ?short_desc:long_desc}} />  ) :

      (
                   <p dangerouslySetInnerHTML={{__html:desc}} /> 
      )}
 
        </div>
    )
}

export default Coin_info;