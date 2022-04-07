import React from 'react';
import Lists from './pages/Lists'
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dashboard
        </p>
      </header>
      <div>
        <Lists/>
      </div>
    </div>
  );
}

export default App;
