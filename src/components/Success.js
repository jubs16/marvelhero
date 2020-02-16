import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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
        const { values: {  firstName, lastName, email, designation, city }} = this.props;
        return (
           <MuiThemeProvider>
               <React.Fragment>
                <h1> Thanks for Registration </h1>                                                    
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