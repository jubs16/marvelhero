import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Box from '@material-ui/core/Box';
import fire from "../config/Fire";
import auth from "../components/route/auth";

const mainTheme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[500]
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

// We can use inline-style
const style = {
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 38,
  padding: "5px 0 50px 0",
  margin: 15,
  boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)"
};
const button = {
  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  padding: "15px",
  margin: 15,
  boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)"
};

export default class UserRedirect extends Component {
      //authenticate if user exists
      loginHandler = e => {
        e.preventDefault();
        fire
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then(u => {
            this.setState({ error: null });
            console.log("logged in");
            auth.login(() => this.props.history.push("/home"))
          })
          .catch(err => {
            this.setState({ error: err.message });
            console.log(this.state.error);
          });
      };
  LoginRedirect = () => {
    console.log("Login");
    this.props.history.push(`/login`);
  };
  SignupRedirect = () => {
    console.log("register");
    this.props.history.push(`/signup`);
  };
  
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <React.Fragment>
          <AppBar position="sticky" style={style}>
            <Toolbar variant="dense">
              <IconButton
                edge="start"
                className={useStyles.menuButton}
                color="primary"
                aria-label="menu"
              ></IconButton>          
                <h2>Welcome Guest</h2>           
            </Toolbar>
            <Box/>
          </AppBar>
          <br />
          <Box  display="flex" justifyContent="center">
          <Button style={button} onClick={this.LoginRedirect}>
            Login
          </Button>
          <Button style={button} onClick={this.SignupRedirect}>
            SignUp
          </Button>
          </Box>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}