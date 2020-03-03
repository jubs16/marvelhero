import React, { Component } from 'react'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from 'material-ui/AppBar'
import RaisedButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

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
                <Typography
              className={"MuiTypography--heading"}
              variant={"h3"}
              gutterBottom
            >
              {values.firstName}
            </Typography>
                <br />  
                <p style={styles.alert}>{values.error}</p>         
                   <br />
                   <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              Thanks!! You are a part of over community
              <br />
              <Box paddingTop={4} />
              <Divider variant="middle" />
            </Typography>
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
//styling
const styles = {
    button: {
        margin: 15,
        pr: 4
    },
    alert: {
        color: "red"
    }
}
