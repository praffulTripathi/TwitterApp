import { createContext, useEffect, useState, useContext, Suspense } from 'react';
import './App.css';
import './styles/GlobalStyles/root.css'
import './styles/LeftPanelStyles/leftPanel.css'
import './styles/MiddlePanelStyles/middlePanel.css'
import './styles/RightPanelStyles/rightPanel.css'
import LeftPanel from './App/LeftPanel/LeftPanel.js'
import MiddlePanel from './App/MiddlePanel/MiddlePanel.js'
import RightPanel from './App/RightPanel/RightPanel.js'
import { APIDataProvider, APIResponseContext } from './App/Providers/APIContext';
import { TweetListProvider } from './App/Providers/TweetListContext';


function App() {
  return (
    <div className="App">
      <LeftPanel />

      <TweetListProvider>
        <MiddlePanel />
      </TweetListProvider>

      <RightPanel />
    </div>
  )
}

export default App;
