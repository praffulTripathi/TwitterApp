import logo from './logo.svg';
import './App.css';
import './styles/leftPanel.css'
import './styles/middlePanel.css'
import './styles/rightPanel.css'
import LeftPanel from './App/LeftPanel';
import MiddlePanel from './App/MiddlePanel';
import RightPanel from './App/RightPanel';

function App() {
  return (
    <div className="App">
    <LeftPanel/>
    <MiddlePanel />
    <RightPanel />
    </div>
  )
}

export default App;
