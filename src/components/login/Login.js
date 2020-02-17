import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";



export default class login extends Component {
     
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider >
               <React.Fragment>
                   <AppBar title="Login with your Personal Details"/>
                   <TextField 
                    hintText="Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                   />
                   <br />
                   <TextField 
                    hintText="Password"
                    floatingLabelText="Password"
                    onChange={handleChange('password')}
                    defaultValue={values.password}
                   />
                   <br />  
                   <p style={styles.alert}>{values.error}</p>
                   <br />
                   <RaisedButton 
                    label="LOGIN"
                    primary={true}
                    style={styles.button}
                    onClick={this.props.login}
                   />                                                      
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
        pr: 4
    },
    alert: {
        color: "red"
    }
}
