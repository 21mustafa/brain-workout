import React from "react";
import { Home } from "./pages/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:category" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
