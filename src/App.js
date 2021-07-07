import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import { Grid, Header, Image, Container, Divider } from "semantic-ui-react";



function App() {
  const [nasaData, setNasaData] = useState([]);
  const [visible, setVisible] = useState(true)



    useEffect(() => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=aFOyrCyQRJGCrJdSTEO4k23Vxmtk0k0kGQdO55P9&date=2012-03-14"
        )
        .then(res => setNasaData(res.data))
        .then(console.log("test", nasaData))
        .catch(error => console.log(error));
    }, []);

    console.log("img1", nasaData)
  return (
    <div className="App">
        <Grid
          textAlign="center"
          style={{ height: "100vh", width: "50%", margin: "40px auto" }}
          verticalAlign="middle">

          <Container textAlign='justified'>

            <Header size='huge' textAlign="center">{nasaData.title}</Header>
          
              <Image src={`${nasaData.url}`} size='huge' style={{margin: "40px auto"}} rounded/>

            <Divider />
            <h3>NASA explanation: {nasaData.explanation}</h3>
            <Divider />
            <h4 style={{textAlign: "center", margin: "40px auto"}}>Copyright: {nasaData.copyright}</h4>

          </Container>

        </Grid>
    </div>
  );
}

export default App;
