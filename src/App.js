import "./App.css";
import { useState, useEffect } from "react";

function App() {

  const [fetchData, setFetchData] = useState([])
  const [isFirstTime, setIsFirstTime] = useState(true)

  if (isFirstTime) {
    setIsFirstTime(false);
    var myHeaders = new Headers();
    myHeaders.append('Service-ID', 'T');

    var requestOptions = {
    method: 'GET',
    headers: new Headers({
      'service-ID': 'T', 
      'Content-Type': 'application/json',
    })
  };
  
  
  fetch("https://token-dev-api.abc-softwaredev.com/token?blocked=false&page=0&personalized=false&size=10", requestOptions)
    .then(response => response.text())
    .then(result => {setFetchData(result)})
    .catch(error => console.log('error', error.de));
    console.log(fetchData)
  return <div className="App"></div>;
  }
}

export default App;
