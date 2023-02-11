import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Landing from './components/UI/Landing';
import Error404 from './pages/Error404';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="*" element={<Error404/>}/>

      </Routes>
      </Router>
     
    </div>
  );
}

export default App;