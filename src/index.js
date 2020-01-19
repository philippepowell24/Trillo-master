import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import Hotel from "./components/Hotel";
import "./sass/main.scss";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <SideBar />
        <Hotel />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
