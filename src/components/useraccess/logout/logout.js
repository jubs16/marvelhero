import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import fire from '../../../config/Fire';
import auth from '../../route/auth';
import { withRouter} from 'react-router-dom';


 class logout extends Component {
 /* constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.logOff = this.props.history;
  }*/
  // logout user
  logout = () => {
    fire
      .auth()
      .signOut()
      .then(function() {
        // Sign-out successful.
        console.log("logout sucess");
      })
      .then(()=>{
        // Logout the user
        auth.logout(() => {
          this.props.history.push("/");
        });
      })
      .catch(function(err) {
        // An error happened.
        console.log(err);
      });
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <br />
          <RaisedButton
            label="Logout"
            secondary={true} 
            style={styles.button}
            onClick={this.logout}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default withRouter(logout);