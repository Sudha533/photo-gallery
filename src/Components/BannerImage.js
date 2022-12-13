import React from "react";

const BannerImage = (props) => {
    
    return(
        <div>
            <img src={props.bannerImage} className="banner" alt={props.alt} style={{width:"80%"}}/>
        </div>
    )
}
export default BannerImage;


