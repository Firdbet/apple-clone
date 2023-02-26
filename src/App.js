import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
// import Youtube from './Components/Youtube/Youtube';


import "./css/styles.css";
import Four04 from "./Pages/Four04/Four04";
import Iphone from "./Pages/Iphone/Iphone";
import Mac from "./Pages/Mac/Mac.js";
import Store from "./Pages/Store/Store";
import Ipad from "./Pages/Watch/Ipad";
import Watch from "./Pages/Watch/Watch";

function App() {
  return (
    <Router>
      <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="mac" exact element={<Mac />} />
            <Route path="ipad" exact element={<Ipad />} />
            <Route path="iphone" exact element={<Iphone />} />
            <Route path="store" exact element={<Store />} />
            <Route path="watch" exact element={<Watch />} />
            <Route path="*" element={<Four04 />} />
          </Routes>   
          {/* <Youtube /> */}
          <Footer />
         
        </div>
    </Router>
  
  )
}

export default App;