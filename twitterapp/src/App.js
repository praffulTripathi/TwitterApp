import { createContext, useEffect, useState, useContext } from 'react';
import './App.css';
import './styles/GlobalStyles/root.css'
import './styles/LeftPanelStyles/leftPanel.css'
import './styles/MiddlePanelStyles/middlePanel.css'
import './styles/RightPanelStyles/rightPanel.css'
import LeftPanel from './App/LeftPanel/LeftPanel.js'
import MiddlePanel from './App/MiddlePanel/MiddlePanel.js'
import RightPanel from './App/RightPanel/RightPanel.js'
import { APIDataProvider, APIResponseContext} from './App/Providers/APIContext';


function App() {
  console.log("Rendering App");
  const {apiResponse} = useContext(APIResponseContext);
  console.log("Inside App: "+apiResponse);
  if(apiResponse!=undefined){
    console.log("Executing inside App after apiResponse get's updated\n"+JSON.stringify(apiResponse).slice(0,20));
  }
  return (
    <div className="App">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  )
}

export default App;
