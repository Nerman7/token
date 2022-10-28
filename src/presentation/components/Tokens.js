import React from "react";
import tokens from "./tokens.css";
import { useEffect, useState } from "react";

function Tokens() {
  const [fetchData, setFetchData] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [tokenModel, setTokenModel] = useState({serialNumber: '', personalized: '', blocked: '', UserModel: ''} )


  useEffect(() => {
    if (isFirstTime) {
      setIsFirstTime(false);
      let myHeaders = new Headers();
      myHeaders.append("Service-ID", "T");

      let requestOptions = {
        method: "GET",
        headers: new Headers({
          "service-ID": "T",
          "Content-Type": "application/json",
        }),
      };

      fetch(
        "https://token-dev-api.abc-softwaredev.com/token?blocked=false&page=0&personalized=false&size=10",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setFetchData( result.records );
          setTokenModel({serialNumber: result.records.serialNumber})
        })
        .catch((error) => console.log("error", error.de));
      }
      
      Object.keys(fetchData).forEach(key => {
        setTokenModel({serialNumber: fetchData[key].serialNumber, personalized:fetchData[key].personalized, blocked: fetchData[key].blocked, UserModel: ''})
        
      });

    
      
    }, [fetchData]);

    console.log( tokenModel.serialNumber);
    
   

  return (
    <div className="main_page_tokens">
      {fetchData.map((item, index) => (
          <ul key={index}>
            <li>{item.serialNumber}</li>
            <li>{item.personalized}</li>
            <li>{item.blocked}</li>
            
          </ul>
        
        ))}
    </div>
  );
}

export default Tokens;
