import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Pages/Main";
import Project from "./Pages/Project";
import About from "./Pages/About";
import UiLeft from "./Components/UiLeft";
import UiRight from "./Components/UiRight";
import "./Styles/main.css"
import "./Styles/ui.css"
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="waSans">
        <BrowserRouter>
            <UiLeft/>
            <UiRight/>
            <div className="page">  
                <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/project/" element={<Project />}></Route>
                  <Route path="*" element={<NotFound/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
