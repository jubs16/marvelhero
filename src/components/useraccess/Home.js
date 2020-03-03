import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import fire from "../../config/Fire";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RaisedButton from "material-ui/RaisedButton";
import Logout from "../../components/useraccess/logout/logout";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = { user: "" };

  // logout user
  logOut = async () => {
    await fire
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("logout sucess");
        this.logOff = this.props.history;
      })
      .catch(function(err) {
        // An error happened.
        console.log(err);
      });
  };
  // Routing here
  HerosRedirect = () => {
    console.log("Heros from json file");
    this.props.history.push(`/heros`);
  };
  ComicsRedirect = () => {
    console.log("marvel comics route");
    this.props.history.push(`/comicsfetch`);
  };
  RandomuserRedirect = () => {
    console.log("marvel comics route");
    this.props.history.push(`/random`);
  };

  async componentDidMount() {
    await fire.auth().onAuthStateChanged(user => {
      console.log(user.email);
      this.setState({ user: user.email });
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Your Logged in" />
          <Box p={2} />
          <Box display="flex" justifyContent="center">
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Welcome on Board :
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography
              className={"MuiTypography--heading"}
              variant={"h3"}
              gutterBottom
            >
               {this.state.user}
            </Typography>
          </Box>
          <br />
          <br />
          <Box display="flex" justifyContent="center">
            <Logout label="Logout" style={styles.button} />
            <RaisedButton
              label="Heros"
              primary={true}
              style={styles.button}
              onClick={this.HerosRedirect}
            />
            <RaisedButton
              label="Comics"
              primary={true}
              style={styles.button}
              onClick={this.ComicsRedirect}
            />
            <RaisedButton
              label="Random Users"
              primary={true}
              style={styles.button}
              onClick={this.RandomuserRedirect}
            />
          </Box>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(Home);
const styles = {
  button: {
    margin: 15
  }
};
