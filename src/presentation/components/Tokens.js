import React from "react";
import tokens from "./tokens.css";
import { useEffect, useState } from "react";
import { getData } from "../../services/APIservice.js";

function Tokens() {
  const [fetchData, setFetchData] = useState([]);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [tokenModel, setTokenModel] = useState([]);

  useEffect(() => {
    if (isFirstTime) {
      setIsFirstTime(false);

      getData()
        .then((res) => res.json())
        .then((data) => setFetchData(data.records));
    }
  }, []);

  
  useEffect(() => {
    Object.keys(fetchData).forEach(key => {
      setTokenModel({serialNumber: fetchData[key].serialNumber, personalized:fetchData[key].personalized, blocked: fetchData[key].blocked, UserModel: ''}) });
      
    },[fetchData])
    console.log(tokenModel);

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
