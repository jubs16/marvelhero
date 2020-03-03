import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import fire from "firebase";
import { withRouter } from "react-router-dom";

class FormUserDetails extends Component {
  constructor(props) {
    super();
    this.signupHandler = this.signupHandler.bind(this);
    this.state = { signUpErr: "" };
  }

  continue = e => {
    //e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  confirm = e => {
    e.preventDefault();
    const { values, history } = this.props;
    if (      
        !values.firstName ||
        !values.email ||
        !values.lastName ||
        !values.password ||
        !values.designation ||
        !values.city) {
      console.log("error");
      const errflag = "error"
      this.setState({ signUpErr: errflag });
      setTimeout(() => {
        history.push(`/register`);
      }, 3000);
    } else {
      this.continue();
      this.signupHandler();
    }
  };

  //create a new user and push to firebase
  signupHandler = e => {
    const { values } = this.props;
    fire
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
        this.setState({ signUpErr: err });
      });
  };

  render() {
    const {
      values: { firstName, lastName, email, designation, city }
    } = this.props;

    if (!this.state.signUpErr) {
            setTimeout(() => {
            this.setState({ signUpErr: "error" });
              this.props.history.push(`/register`);
            }, 4000);
      }

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Job Title" secondaryText={designation} />
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <br />
          <p style={styles.alert}>{this.state.signUpErr}</p>     
          <br />
          <RaisedButton
            label="Confirm"
            primary={true}
            style={styles.button}
            onClick={this.confirm}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(FormUserDetails);
const styles = {
  button: {
    margin: 15,
    pr: 4
  },
  alert: {
      color: "red"
  }
};
