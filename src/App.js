import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import About from "./Components/About";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 12;
  const country = "in";
  const apikey = "479ac70180ff4770a28cd9a4c23752c6";
  //apiKey=  process.env.REACT_APP_MY_NEWS_APICODE 
  
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key={"general"} pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key={"business"} pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key={"entertainment"} pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key={"general"} pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key={"health"} pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key={"science"} pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key={"sports"} pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key={"technology"} pageSize={pageSize} country={country} category="technology" />} />
          <Route path="/about" setProgress={setProgress} element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
