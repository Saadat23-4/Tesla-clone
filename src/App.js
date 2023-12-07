import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import ReactDom from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import store from "../src/app/store";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Provider>
  );
}

export default App;
