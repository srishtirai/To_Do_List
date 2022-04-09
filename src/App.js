import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import InputComponent from "./components/inputComponent/InputComponent"
import ListComponent from "./components/ListComponent/ListComponent";
import "./App.scss";

const App = () => {
  const data = useSelector((state) => state.data);
  const form = "add_new_list"
  useEffect(() => {
    window.localStorage.setItem("dashBoardData", JSON.stringify(data));
  },[data])

  return (
    <div className="app">
      <header className="app-header">
        <p>
          Dashboard
        </p>
      </header>
      <div className="app-body">
        <div className="app-body-lists">
          {
            data.lists && data.lists.map( (list) => 
              <ListComponent key={list.id} listInfo={list}/>
            )
          }
        </div> 
        <div>
          <InputComponent type="list" form={form}/>
        </div>
      </div>
    </div>
  );
}

export default App;