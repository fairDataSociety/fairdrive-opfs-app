import React from "react";
import "./App.css";
import { DemoFSBrowser } from "./demofs";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App" style={{ display: "flex" }}>
        <DemoFSBrowser name={"DemoFS"} id="DemoFS" />
      </div>
    </BrowserRouter>
  );
};

export default App;
