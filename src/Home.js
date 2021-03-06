import React, { Component } from 'react';
import { withRouter} from "react-router-dom";

import "./Home.css";
import "./Animations.css";

class Home extends Component {

    componentDidMount() {
        this.usernameTextBox = document.getElementById("usernameTextBox");
    }

    loginHandler() {
        this.props.history.push({
            pathname: "/game-select",
            state: { name: this.username }
        });
    }

    startButtonHandler() {
        if (this.usernameTextBox.value === "") {
            window.alert("Please enter a username!");
            return;
        }

        if (this.usernameTextBox.value.length > 20) {
            window.alert("Please enter a shorter username! (Below 20 characters)");
            return;
        }

        window.username = this.usernameTextBox.value;
        var message = {
            type: "user-login",
            name: window.username
        };
        window.serverConnection.send(JSON.stringify(message));
    }

    render() {
        return (
            <div className="welcome-container">
                <div className="welcome-box init-left">

                    <img src={require("./imgs/rm_logo.png")} className="rm-logo" alt="robomaster logo"/>
                    <h2 align="center">Welcome to Team LumiNUS's Interactive Robot Showcase!</h2>
                    <p align="center">
                        Get ready to experience the exciting gameplay elements of the RoboMaster competition <br/>
                        by controlling our robots live from the comfort of your home!
                    </p>
                    <p>Please enter your nickname below to begin :)</p>
                    <br/>
                    <div className="usernameEntry">
                        <input id="usernameTextBox" type="text" placeholder="Enter any nickname..."></input>
                        <button onClick={this.startButtonHandler.bind(this)}>Start!</button>
                    </div>
                    <br/>
                    <h3>For the best experience, please use Chrome on Windows.</h3>
                </div>
            </div>
        );
    }
}

export default withRouter(Home);