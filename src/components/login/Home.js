import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import fire from "../../config/Fire";

export default class Home extends Component {
  constructor(props) {
    super();
    this.logout = this.logout.bind(this);
    this.state = {userData: ""}
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

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      this.setState({ user: user.email});
    });
  }


  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Your Logged in" />
          <h1>Welcome on Board : {this.state.user}</h1>
          <br />
          <br />
          <RaisedButton
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
