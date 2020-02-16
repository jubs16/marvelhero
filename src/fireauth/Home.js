import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButtonButton from "material-ui/RaisedButton";
import fire from "../config/Fire";

export default class Home extends Component {
  constructor(props) {
    super();
    this.logout = this.logout.bind(this);
  }
  // logout user
  logout = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log("logout sucess");
      })
      .catch(function(err) {
        // An error happened.
      });
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Your Logged in" />
          <h1>Welcome on Board : {this.props.email}</h1>
          <br />
          <br />
          <RaisedButtonButton
            label="Logout"
            primary={true}
            style={styles.button}
            onClick={this.logout}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
