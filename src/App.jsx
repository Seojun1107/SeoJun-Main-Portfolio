import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./Pages/Main";
import Project from "./Pages/Project";
import About from "./Pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/" element={<About />}></Route>
					<Route path="/project/" element={<Project />}></Route>
					{/* <Route path="*" element={<NotFound />}></Route> */}
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
