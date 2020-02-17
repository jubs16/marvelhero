import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from 'material-ui/AppBar'

export default class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
               <AppBar title="User Register Success"/>
                <h3>{values.firstname}</h3>
               </React.Fragment>
           </MuiThemeProvider>
        )
    }
}

