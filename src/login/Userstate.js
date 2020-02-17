import React, { Component } from "react";
import fire from "../../config/Fire";
import Home from "./Home";
import Login from "./Login";

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
    console.log(e.target.value);
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
      })
      .catch(err => {
        this.setState({ error: err.message });
        console.log(this.state.error);
      });
  };
  //create a new user and push to firebase
  signupHandler = e => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u) => {console.log(u)}).catch((err)=> {
        console.log(err)
    })
  }

  render() {
    const { email, password, error } = this.state;
    const values = { email, password, error };
    return (
      <div>
        {(this.state.user) ? (
          <Home />
        ) : (
          <Login
            handleChange={this.handleChange}
            values={values}
            login={this.loginHandler}
          />
        )}
      </div>
    );
  }
}
