import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home"
import Location from "./components/Location"
import Student from "./components/Student"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Student/>}/>   
    <Route path='/Location' element={<Location/>}/>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
