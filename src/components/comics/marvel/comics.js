import React, { Component } from "react";
import Logout from "../../useraccess/logout/logout";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { withRouter } from "react-router-dom";

function Card({
  title,
  issn,
  name,
  diamondcode,
  thumbnail,
  creators,
  resourceurl
}) {
  return (
    <div
      className="Card"
      onClick={() => window.open(`${resourceurl}`, "_blank")}
    >
      <div
        className="Picture"
        style={{
          height: "100%",
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "contain",
          backgroundPosition: "top",
          borderRadius: "inherit",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="Card__gradient-overlay">
          <div className="Card-Top"></div>
          <div className="Card-Bot">
            <h1>{title}</h1>
            {name}
          </div>
          <div className="Card-Bot">
            <h5> {`Daimond code :  ${diamondcode}`} </h5>
            <h5> {`ISSN : ${issn}`}</h5>
            <br />
            <h6>
              {creators.map((creator,key) => {
                return <p key={key}>{creator}</p>;
              })}
            </h6>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

class Comics extends Component {
  state = {
    loading: true,
    comics: null
  };

  async componentWillMount() {
    const url =
      "https://gateway.marvel.com:443/v1/public/comics?title=deadpool&apikey=13aeb9a3b4ec92bd14917efeb55b54f5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ comics: data.data.results, loading: false });
    console.log(this.state.comics);
    console.log(this.state.loading);
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
    if (!this.state.comics.length) {
      return <div>Not able to fetch any comics</div>;
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1 className="Title">Marvel Deadpool Comics Display</h1>
          <Logout />
          <RaisedButton
            label="Home"
            primary={true}
            onClick={this.HomeRedirect}
          />
          <br />
          <div
            className="Grid"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            {this.state.comics.map((comic, key) => (
              <Card
                key={key}
                title={comic.title}
                name={comic.series.name}
                diamondcode={comic.diamondCode}
                issn={comic.issn}
                thumbnail={comic.thumbnail.path + "/standard_fantastic.jpg"}
                resourceurl={comic.urls.map((link, j) => {
                  return link.url;
                })}
                creators={comic.creators.items.map((creator, j) => {
                  const str = creator.role + ": " + creator.name;
                  const strbreak = str.split("\n");
                  return strbreak;
                })}
              />
            ))}
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default withRouter(Comics);
