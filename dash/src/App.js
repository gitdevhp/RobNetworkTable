import './App.css';
import Main from './main';

function App() {
  var curTick = 0;
  
  return (
    <div className="App">
      <div className="Console">
        <h5>Dashboard</h5>
      </div>
      <div className="grid-flex">
        <Main tick={curTick}/>
      </div>
    </div>
  );
}

export default App;