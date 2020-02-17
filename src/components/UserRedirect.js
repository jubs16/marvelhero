import React, { Component } from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from '@material-ui/core/AppBar'
import RaisedButtonButton from '@material-ui/core/Button'
import UserForm from './signup/UserForm'
import Heros from './hero'
export default class UserRedirect extends Component {

    render() {
       
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Welcome Guest"/> 
                   <br />
                   <RaisedButtonButton 
                    label="LOGIN"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                   />      
                   <RaisedButtonButton 
                    label="SIGNUP"
                    primary={true}
                    style={styles.button}
                    onClick= {<UserForm />}
                   />          
                   <Heros />                                        
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15,
        pr: 4
    }
}