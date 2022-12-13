import React from "react";
import UserManager from "./UserManager";
import Album from "./Album";
import MessageArea from "./MessageArea";
import ContentAreaContext from "./ContentAreaContext";
import LayeredDiv from "./LayeredDiv";


class ContentArea extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId:"",
            userName:"",
            loggedIn:false
        }
       this.handleLoginChange= this.handleLoginChange.bind(this)
    }
    handleLoginChange(data){
        this.setState({
            userId:data.userId,
            userName:data.userName,
            loggedIn:data.loggedIn
        })

    }
    
    render(){
        return(
            <ContentAreaContext.Provider  value={{userId:this.state.userId, userName:this.state.userName, name:"hello"}}>
            <div>
                <UserManager name="hello" loginCallback={this.handleLoginChange} showMessageArea ={userInfo => (<MessageArea userInfo = {userInfo}/>)}/>
                <Album/>
                <LayeredDiv/>
            </div>
            </ContentAreaContext.Provider>
        )

    }
}
export default ContentArea;
