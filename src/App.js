import logo from './logo.svg';
import './App.css';

import react from 'react';
import Child from './Child';

function App() {
  return (
    <div className="App">
     <Child name="Umer Siddique" bioData="frontEnd Developer"/>
     <hr/>
     <Child name="Faisal jaweed" bioData="BackEnd Developer"/>
     <hr/>
     <Child name="Azeem Ahmed" bioData="software engineer"/>
    </div>
  );
}

export default App;
