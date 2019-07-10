import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [nasaData, setNasaData] = useState([]);



    useEffect(() => {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=aFOyrCyQRJGCrJdSTEO4k23Vxmtk0k0kGQdO55P9"
        )
        .then(res => setNasaData(res.data))
        .catch(error => console.log(error));
    }, []);

    console.log("img", nasaData)
  return (
    <div className="App">
        <>
          <h1>{nasaData.title}</h1>
          <img src={`${nasaData.url}`} />
          <h3>NASA explanation: {nasaData.explanation}</h3>
          <h4>Copyright: {nasaData.copyright}</h4>
        </>
    </div>
  );
}

export default App;
