import { createContext, useState, useEffect } from "react";

export const APIResponseContext = createContext();

export const APIDataProvider = ({ children }) => {

  const [apiResponse, setApiResponse] = useState(undefined);

  const fetchDataFromAPI = async () => {
    await fetch("https://sandbox.nextleap.app/page/fetch")
      .then((response) => {
        if (response.ok)
          return response.json()
        return Promise.reject(response);
      })
      .then((jsonData) => {
        setApiResponse(jsonData);
      })
      .catch((error) => console.log(`Error Fetching data from source\n${error}`));
  }

  useEffect(() => {
    fetchDataFromAPI();
  }, [])

  return (
    <APIResponseContext.Provider value={apiResponse}>
      {children}
    </APIResponseContext.Provider>
  )
}
