import React from 'react';

import data from  '../config/users.json'

/*
import Card from "@material-ui/core/Card";



import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';



export default class hero extends Component {
 
       getData = async () => {
            const res = await fetch('../users.json');
            const data = await res;
          
            console.log(data);
            return data;
          };
      
    render() {
        return (
                <Container maxWidth="sm">
                    <div>
                    {this.getData}
                    </div>

            <div className="App">
            <Card className={styles.card}>
              <CardMedia
                className={styles.media}
                image={
                  "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                }
              />
              <CardContent className={styles.content}>
                <Typography
                  className={"MuiTypography--heading"}
                  variant={"h6"}
                  gutterBottom
                >
                Nature around
                </Typography>
                <Typography
                  className={"MuiTypography--subheading"}
                  variant={"caption"}
                >
                  We are going to learn different kinds of species in nature that live
                  together to form amazing environment.
                </Typography>
              </CardContent>
            </Card>
          </div>
          </Container>
        )
    }
}


const styles = {
    card: {
        maxWidth: 20,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },
      media: {
        paddingTop: "56.25%"
      },
      content: {
        textAlign: "left",
        padding: 3
      },
      divider: {
        margin: `${ 3}px 0`
      },
      heading: {
        fontWeight: "bold"
      },
      subheading: {
        lineHeight: 1.8
      },

}


const  newdata= data.map( ( data) =>{
  return  (
    
    <Card key= {data.id}>
      <Card.Body>
        <Card.Title>{ data.name}</Card.Title>
        <Card.Text>
              {data.desc}
        </Card.Text>

        <a className="btn-primary"
          href={data.url} 
          target="_blank"
          rel=" noopener noreferrer"
           >
          >
          Download
        </a>

      </Card.Body>
    </Card> 
  
  )
}
)




export default class hero extends Component {
render() {
return (
<Card className=" m-3 p-3 owncard ">  {newdata}  </Card>

)
}
}

*/


export default function hero() {
  return (
    <div>
      <div> {newdata} </div>
    </div>
  )
}

const  newdata= data.map( ( data) =>{
  return  (
    
    <div key= {data.id}>
      <div>
        <h1>{ data.name}</h1>
        <p>
              {data.desc}
        </p>
                                                                                                                                                                                                                                                                                                                                     
      </div>
    </div> 
  
  )
}
)


