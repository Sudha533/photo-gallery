import React from "react";
import './Master.css';

class MessageArea extends React.Component{
    
    render(){
        let userInfo = this.props.userInfo;
        console.log(userInfo);
    return(
        
          <p> {userInfo.loggedIn? "Welcome " + userInfo.userName + "! " + userInfo.instructions: userInfo.instructions}</p>
        
    )
    }
}
export default MessageArea;