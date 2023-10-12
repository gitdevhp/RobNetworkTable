import './App.css';
import Loc from '../components/location';
import Rot from '../components/rotation';

function App() {
  export var loc = true;
  export var rot = true;
  return (
    <div className="App">
      <div className="console">
        
      </div>
      <div className="main-hold">
        <Loc/>
        <Rot/>
      </div>
    </div>
  );
}

export default App;
