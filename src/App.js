import React from 'react';
import InputComponent from './components/InputComponent/InputComponent'
import './App.scss';
import ListComponent from './components/ListComponent/ListComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dashboard
        </p>
      </header>
      <div className='App-body'>
      <div>
          <ListComponent />
        </div>
        <div>
          <InputComponent type="list"/>
        </div>
      </div>
    </div>
  );
}

export default App;