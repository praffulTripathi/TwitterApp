import { createContext,useState,useEffect } from "react";

export const APIResponseContext = createContext();

export const APIDataProvider = ({children})=>{

  console.log("Rendering Provider component");

  const [apiResponse, setApiResponse] = useState(null);


  const fetchDataFromAPI = async()=> {
    console.log("Fetching Data");
    await fetch("https://sandbox.nextleap.app/page/fetch")
      .then((response) => {
        if (response.ok)
          return response.json()
        return Promise.reject(response);
      })
      .then((jsonData) => {
        if(jsonData!=null){
          console.log("Received JSON Data");
          setApiResponse(jsonData);
        }
        else console.log("JSON data is null");
      })
      .catch((error) => console.log(`Error Fetching data from source\n${error}`));
  }


  useEffect(() => {
    fetchDataFromAPI();
  }, [])
  
  useEffect(() => {
    // if(apiResponse!=null)
    // console.log("Executing after apiResponse get's updated\n"+JSON.stringify(apiResponse).slice(0,20));
    // else console.log("apiResponse State is null currently");
  }, [apiResponse]);


  return(
    <APIResponseContext.Provider value={apiResponse}>
        {children}
    </APIResponseContext.Provider>
  )
}
