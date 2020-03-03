import React, { Component } from "react";
import fire from "../../../config/Fire";
import Home from "../Home";
import Login from "./Login";
import auth from "../../route/auth";
import Button from "@material-ui/core/Button";

export default class Userstate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      //chk valid user
      if (user) {
        this.setState({ user });
        //localStorage.setItem ('user', user.uid);
      } else {
        this.setState({ user: null });
      }
    });
  }

  // handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  //authenticate if user exists
  loginHandler = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        this.setState({ error: null });
        console.log("logged in");
        auth.login(() => this.props.history.push("/home"));
      })
      .catch(err => {
        this.setState({ error: err.message });
        console.log(this.state.error);
      });
  };
  //route to signup
  SignupRedirect = () => {
    console.log("register");
    this.props.history.push(`/signup`);
  };
  render() {
    const { email, password, error } = this.state;
    const values = { email, password, error };
    return (
      <div>
        {this.state.user ? (
          <Home />
        ) : (
          <React.Fragment>
            <Login
              handleChange={this.handleChange}
              values={values}
              login={this.loginHandler}
            />
            <Button label="Home"  variant="contained" color="secondary" onClick={this.SignupRedirect}>
              SignUp
            </Button>
          </React.Fragment>
        )}
      </div>
    );
  }
}
