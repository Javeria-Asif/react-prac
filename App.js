import logo from './logo.svg';
import './App.css';
import User from './component/User'; 
function App() {
  return (
    <div className="App">
        <h1>hello world</h1>
        <User User='old'/>
        <User User='new'/>
        <User User='updates'/>
    </div>
  );
}

export default App;
