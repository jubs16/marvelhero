import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import RaisedButton from "material-ui/RaisedButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Logout from "../../useraccess/logout/logout";
import { withRouter } from "react-router-dom";

class jsontest extends Component {
  state = {
    loading: true,
    user: null
  };

  async componentWillMount() {
    const url = "https://randomuser.me/api/?results=8";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ user: data.results, loading: false });
    console.log(this.state.user);
    //console.log(this.state.loading);
  }
  // route home
  HomeRedirect = () => {
    console.log("home");
    this.props.history.push(`/home`);
  };
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.user.length) {
      return <div>Not able to fetch any user</div>;
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1 className="Title">Displaying Random users</h1>
          <h3>Refresh page to see more</h3>
          <br />
          <Logout />
          <RaisedButton
            label="Home"
            primary={true}
            onClick={this.HomeRedirect}
          />
          <br />
          <Box display="flex" justifyContent="center">
            <Grid container spacing={3}>
              {this.state.user.map((users, key) => (
                <Grid item xs={3} key={key}>
                  <Card className={Styles.root}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="no_img"
                        height="290"
                        image={users.picture.large}
                        title="image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          <i>
                            {users.name.title}. {users.name.first}{" "}
                            {users.name.last}
                          </i>
                        </Typography>
                        <Divider />
                        <List>
                          <ListItemText primary={`Age:  ${users.dob.age}`} />
                          <ListItemText primary={`Phone:  ${users.phone}`} />
                          <ListItemText primary={`Email:  ${users.email}`} />
                          <Divider />
                          <ListItemText
                            primary={`City:  ${users.location.city}`}
                          />
                          <ListItemText
                            primary={`State:  ${users.location.state}`}
                          />
                          <ListItemText
                            primary={`Country:  ${users.location.country}`}
                          />
                          <ListItemText
                            primary={`Postcode:  ${users.location.postcode}`}
                          />
                        </List>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(jsontest);
const Styles = makeStyles({
  root: {
    maxWidth: 300
  }
});
