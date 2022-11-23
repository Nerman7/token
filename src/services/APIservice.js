 let myHeaders = new Headers();
myHeaders.append("Service-ID", "T");

let requestOptions = {
  method: "GET",
  headers: new Headers({
    "service-ID": "T",
    "Content-Type": "application/json",
  }),
  
};
export const getData = () => {
   
return fetch(
  "https://token-dev-api.abc-softwaredev.com/token?blocked=false&page=0&personalized=false&size=10",
  requestOptions
)
}

