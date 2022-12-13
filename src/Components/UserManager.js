import React from "react";
import './Master.css';

class UserManager extends React.Component{
    constructor(props){
        super(props)
        //We do all our intialization here
        //intialize the state this.state = {};
        this.state = {
            userId:"",
            userName:"",
            loggedIn:false,
            instructions:"Please log in to comment on photos",
            userIdFieldValue:"",
            passwordFieldValue:""
        };
        //binding funtions, this is necessary for this point to this object
        this.handleUserIdchange = this.handleUserIdchange.bind(this);
        this.handlePasswordchange = this.handlePasswordchange.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        
    }
    //task 3
    handleUserIdchange(event){
        this.setState({
            userIdFieldValue: event.target.value
        });

    }
    handlePasswordchange(event){
        this.setState({
            passwordFieldValue : event.target.value
        });

    }
    //logIn
    logIn(){

        /*this.setState ( {
            loggedIn:true
        })*/
        let userIdEntered = this.state.userIdFieldValue;
        let passwordEntered = this.state.passwordFieldValue;

        let successful = false;
        let userName="unKnown";
        //simulated database lookup, we dont write username to check in real life
        if(userIdEntered.trim()==="Sudha" && passwordEntered.trim()==="12345"){
            userName="Sudha Subramaniam";
           successful= true;
        }
        if(userIdEntered.trim()==="Niran" && passwordEntered.trim()==="12345"){
            userName="Niran";
           successful= true;
        }

        //Was the login successful?

        if(successful){
            this.setState({
                loggedIn:true,
                userId:userIdEntered.trim(),
                userName:userName,
                instructions: "You can comment now on photos"
            },()=>{this.props.loginCallback(this.state)}
            )
        }
        else{
            this.setState({
                instructions:"Invalid username or password. Please try again!"
            })
        }



    }
    //logout
    logOut(){
        this.setState({
            loggedIn:false
        });
        this.setState({
            instructions:"Please login to comment on photos"
        })
        this.setState({
            userId:"",
            userName:"",
            userIdFieldValue:"",
            passwordFieldValue:""
        },()=>{this.props.loginCallback(this.state)}
        )
    }
   

    render(){
        if(this.state.loggedIn)
        //loggedin
        {
            //message and logout button
            return(
                <div className="user-manager-block user-manager-block-active-background">
                    <p>Logged in as : {/* this state userName attribute*/ this.state.userName} &nbsp;
                    <button className="button" onClick={this.logOut}>Logout</button></p><br/>
                    {this.props.showMessageArea(this.state)}
                    {/*State attribute instructions */}

                </div>
            )

        }
        else{
            //If its not true, login form
            return(
                <div className="user-manager-block user-manager-block-inactive-background">
                    <p>
                        User ID: &nbsp;<input type="text" value={this.state.userIdFieldValue} onChange={this.handleUserIdchange} />&nbsp;
                        password: &nbsp; <input type="password" value={this.state.passwordFieldValue} onChange={this.handlePasswordchange}/>&nbsp;
                        <input className="button" type="button" value="Log in" onClick={this.logIn}/><br/>
                        </p>
                        {this.props.showMessageArea(this.state)}
                        {/* set attribute instructions */ }

                   

                </div>
            )
        }
        
    }
}
export default UserManager;