import React from "react";
import './Master.css';
import PhotoEntry from "./PhotoEntry";
import {itemslist} from "../Data/photo-entries"

class Album extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(itemslist);
        return(
            <div className="flex-container">
               {
                itemslist.map((photo)=>{
                    return <PhotoEntry key={photo.src} image={photo.src} alt={photo.album} name={photo.name}/>
                }
                )
               } 
                {/*<PhotoEntry image="swan.jpg" alt="Swan" name="Swan"/>*/}
                
            </div>
        )
    }
}
export default Album;