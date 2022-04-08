import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputComponent from './components/InputComponent/InputComponent'
import './App.scss';
import ListComponent from './components/ListComponent/ListComponent';

const App = () => {
  const data = useSelector((state) => state.data);

  useEffect(() => {
    window.localStorage.setItem("dashBoardData", JSON.stringify(data));
  },[data])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Dashboard
        </p>
      </header>
      <div className='App-body'>
        <div className='App-body-lists'>
          {
            data.lists && data.lists.map( (list) => 
              <ListComponent key={list.id} listInfo={list}/>
            )
          }
        </div> 
        <div>
          <InputComponent type="list"/>
        </div>
      </div>
    </div>
  );
}

export default App;