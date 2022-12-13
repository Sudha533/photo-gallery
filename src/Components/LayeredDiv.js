import React from "react";
import ContentAreaContext from "./ContentAreaContext";

class LayeredDiv extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>Layer0</p>
                <Layer1/>
            </div>
        )
    }
}
class Layer1 extends React.Component{
 
    render(){
        return(
            <div>
                <p>Layer1</p>
                <Layer2/>
            </div>
           
        )
    }
}
class Layer2 extends React.Component{
    render(){
        return(
            <div><p>Layer2</p>
                <Layer3/></div>
        )
    }
}
class Layer3 extends React.Component{
    static contextType = ContentAreaContext;
    componentDidMount(){
        console.log("Layer3.componentDidMount()");
      }
    render(){
        
        return(
            <div>
                <p>Layer3</p>
               {this.context.userName} 
            </div>
        )
    }
}
export default LayeredDiv;