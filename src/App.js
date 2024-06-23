import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import About from "./Components/About";

export default class App extends Component {
  pageSize = 12;
  country = "in";
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key={"general"} pageSize={this.pageSize} country={this.country} category="general" />} > </Route>
            <Route exact path="/business" element={<News key={"business"} pageSize={this.pageSize} country={this.country} category="business" />} > </Route>
            <Route exact path="/entertainment" element={<News key={"entertainment"} pageSize={this.pageSize} country={this.country} category="entertainment" />} > </Route>
            <Route exact path="/general" element={<News key={"general"} pageSize={this.pageSize} country={this.country} category="general" />} > </Route>
            <Route exact path="/health" element={<News key={"health"} pageSize={this.pageSize} country={this.country} category="health" />} > </Route>
            <Route exact path="/science" element={<News key={"science"} pageSize={this.pageSize} country={this.country} category="science" />} > </Route>
            <Route exact path="/sports" element={<News key={"sports"} pageSize={this.pageSize} country={this.country} category="sports" />} > </Route>
            <Route exact path="/technology" element={<News key={"technology"} pageSize={this.pageSize} country={this.country} category="technology" />} > </Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
