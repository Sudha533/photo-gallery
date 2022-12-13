import React from "react";
import './Master.css';
import ContentAreaContext from "./ContentAreaContext";

class PhotoEntry extends React.Component{
    
    static contextType = ContentAreaContext;

    render(){
        console.log(this.context.userName);
        const imgSrc = this.props.image;
        return(
            <div className="photo-entry-block">
                <a href={imgSrc} target="_blank">
                    <img className="photo-image" src={imgSrc} alt={this.props.alt} />
                </a>
                <h5>{this.props.name}</h5>
                {
                    this.context.userName !== "" &&
                    <div className="photo-comment">comment as {this.context.userName} <input type="text"/></div>
        }
            </div>
        )
    }
}
export default PhotoEntry;