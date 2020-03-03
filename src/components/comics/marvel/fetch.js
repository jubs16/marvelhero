import React, { Component } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
//import "./../heroCardStyles.css"; // heros cards styles
/* Marvel API_KEY
 * Needs to store in dot.env file before uploading to github
 * I used here just for testing purpose */
const PUBLIC_KEY = process.env.MARVEL_PUBLIC_KEY;



/*
export default class fetch extends Component {
  constructor() {
    super();
    this.state = { comics: [] };
  }

  async componentDidMount() {
    // fetch data from a url endpoint
    await axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics?title=deadpool&apikey=${PUBLIC_KEY}`
      )
      .then(res => {
        res.data.data.results.forEach(comic => {
          //console.log(comics);
          //this.list.push(comics);
          this.setState({ comics: comic });
         // console.log(this.state.comics);
        });
      })
      .catch(err => {
        console.log("error", err);
        // handle the error
      });
  }*/
/* sss
  card = () =>  this.state.comics.map(list=> { 
    return (
      <div className="Card" onClick={() => window.open("http://www.google.com", "_blank")}>
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
              <h2>{list.title}</h2>@{list.user}
            </div>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h"}
              gutterBottom
            >
              ID# {list.issn}
            </Typography>
            <Divider variant="middle" />
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
              gutterBottom
            >
              {list.email}
            </Typography>
          </div>
        </div>
      </div>
    );
  });

  render() {
    const { comics } = this.state;
 
    return (
      <div className="App">
        <h1 className="Title">Marvel API Comics</h1>
    {comics.forEach(comic => <li key={comic.id}>{comic.title}</li>)}
      </div>
    );
  }
}
*/
/*
export default class fetch extends Component {
  constructor() {
    super();
    this.state = { comics: [] };
  }

  async componentDidMount() {
    // fetch data from a url endpoint
    await axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics?title=deadpool&apikey=${PUBLIC_KEY}`
      )
      .then(res => {
        res.data.data.results.forEach(comic => {
          //console.log(comics);
          //this.list.push(comics);
          this.setState({ comics: comic });
          //console.log(this.state.comics.id);
        });
      })
      .catch(err => {
        console.log("error", err);
        // handle the error
      });
  }

  card = e => {
    e.preventDefault();

    this.state.comics.map(data => {
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
              <h2>{data.type}</h2>@{data.id}
            </div>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h"}
              gutterBottom
            >
              ID# {data.heroId}
            </Typography>
            <Divider variant="middle" />
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
              gutterBottom
            >
              {data.email}
            </Typography>
          </div>
        </div>
      </div>
    )
  });
  }
   
  render() {
    const { comics } = this.state;
    console.log(this.state.comics.id);
    return (
      <div>
        <h1>Marvel Comics</h1>
         {()=>this.card}
         
         <ul>
   
            <li>{this.state.comics.id}</li>


        </ul>
      </div>
    )
  }
}

*/

class fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: {},
      list: []
    };
  }



  getData() {
  /*  return this.state.list.map(product => 
      (
          <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.body}</td>
          </tr>
      )
  )*/
  }

  componentDidMount() {
    // fetch data from a url endpoint
   axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics?title=deadpool&apikey=${PUBLIC_KEY}`
      )
      .then(res => {
        res.data.data.results.forEach(comic => {
          //console.log(comics);
          //this.xyz.push(comic);
          this.setState({list : comic.id});
           console.log(this.state.list)
        });
      })
      .catch(err => {
        console.log("error", err);
        // handle the error
      });

   
  }



  render() {
   
    console.dir(this.state.list);
    return (
      <div>
        <ul>
        <ul>
        
         </ul>
  
        </ul>
      </div>
    );
    }
}

export default fetch;
