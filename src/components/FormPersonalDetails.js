import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButtonButton from 'material-ui/RaisedButton'

export default class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title="Enter Personal Details"/>
                   <TextField 
                    hintText="Enter Your job title"
                    floatingLabelText="Designation"
                    onChange={handleChange('designation')}
                    defaultValue={values.designation}
                   />
                   <br />
                   <TextField 
                    hintText="Enter Your City"
                    floatingLabelText="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                   />
                   <br />  
                   <br />
                   <RaisedButtonButton 
                    label="Continue"
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