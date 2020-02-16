import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import { List, ListItem } from 'material-ui/List'
import RaisedButtonButton from 'material-ui/RaisedButton'

export default class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: {  firstName, lastName, email, designation, city }} = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Confirm User Data"/>
                   <List>
                       <ListItem
                       primaryText="First Name"
                       secondaryText={ firstName }
                       />
                       <ListItem
                       primaryText="Last Name"
                       secondaryText={ lastName }
                       />   
                       <ListItem
                       primaryText="Email"
                       secondaryText={ email }
                       />                         
                       <ListItem
                       primaryText="Job Title"
                       secondaryText={ designation }
                       />
                       <ListItem
                       primaryText="City"
                       secondaryText={ city }
                       />                                                                  
                   </List>
                   <br />
                   <RaisedButtonButton 
                    label="Confirm"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                   />  
                   <RaisedButtonButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
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
    }
}