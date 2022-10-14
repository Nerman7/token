import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [fetchData, setFetchData] = useState([])

  var myHeaders = new Headers();
  myHeaders.append("Service-ID", "Q");
  myHeaders.append("Accept", "application/json");
  myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000/');
  myHeaders.append('Access-Control-Allow-Credentials', 'true');
  myHeaders.append('Host', 'https://token-dev-api.abc-softwaredev.com/');
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("https://token-dev-api.abc-softwaredev.com//token?blocked=false&page=0&personalized=false&size=10", requestOptions)
    .then(response => response.text())
    .then(result => {setFetchData(result)})
    .catch(error => console.log('error', error));
    console.log(fetchData)
  return <div className="App"></div>;
}

export default App;
