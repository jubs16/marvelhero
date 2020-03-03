import React, { Component } from "react";
//json fetch url
import data from "../../config/users.json";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Logout from "../useraccess/logout/logout";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";

class hero extends Component {
  // route home
  HomeRedirect = () => {
    console.log("home");
    this.props.history.push(`/home`);
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="App">
            <h1 className="Title">Users from Local JSON file</h1>
            <br />
            <Logout />
            <RaisedButton
              label="Home"
              color="primary"
              onClick={this.HomeRedirect}
            />
            <br />
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                {card}
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const card = data.map(data => {
  return (
    <div className="Card">
      <div
        className="Picture"
        style={{
          height: "100%",
          backgroundImage: `url("https://source.unsplash.com/user/erondu/250x300")`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          borderRadius: "inherit",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="Card__gradient-overlay">
          <div className="Card-Top"></div>
          <div className="Card-Bot">
            <h2>{data.name}</h2>@{data.user}
          </div>
          <Box display="flex" justifyContent="center">
            <Typography
              className={"MuiTypography--heading"}
              variant={"h"}
              gutterBottom
            >
              ID# {data.heroId}
            </Typography>
            <Divider variant="middle" />
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
              gutterBottom
            >
              {data.email}
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
});
export default withRouter(hero);
