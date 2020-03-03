import React, {Component} from "react";
import Logout from '../useraccess/logout/logout'
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

  function Card({name, description, thumbnail}) {
    return (
      <div className="Card"   onClick={()=> window.open("http://www.google.com", "_blank")}>
        <div className="Picture"
          style={{
            height: '100%',
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: 'contain',
            backgroundPosition: 'top',
            borderRadius: 'inherit',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="Card__gradient-overlay">
            <div className="Card-Top">
            </div>
            <div className="Card-Bot">
              <h1>{name}</h1>
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default class characters extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formResponse: '',
        isLoading: false,
        characters: [
          {
            name: 'Iron Man',
            description: `Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.`,
            thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg'
          },
          {
            name: 'Spider-Man',
            description: `Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.`,
            thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg'
          },
          {
            name: 'Stan Lee',
            description: `"I'm Stan Lee!""`,
            thumbnail: 'https://s3.amazonaws.com/ktpublic-pics/stanleeIllustration.jpg'
          },
        ],
      }
    }
// route home
  HomeRedirect = () => {
    console.log("home");
    this.props.history.push(`/home`);
  };
    render() {
      return (
        <MuiThemeProvider>
        <React.Fragment>
          <h1 className="Title">Marvel API Character Search</h1>
          <Logout />
          <RaisedButton
            label="Home"
            primary={true}
            onClick={this.HomeRedirect}
          />
          <br />
          <div className="Grid" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
            {this.state.characters.map((character, index) => (
              <Card
                key={index}
                name={character.name} 
                description={character.description} 
                thumbnail={character.thumbnail}              
              />                                             
            ))}
          </div>
          </React.Fragment>
      </MuiThemeProvider>
      );
    }
  }
  
