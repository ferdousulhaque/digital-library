// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Library from "./components/Library";
import Layout from "./components/Layout";
import AddBook from './components/AddBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Layout/><Library/></>}/>
        <Route path="/add-book" element={<AddBook/>}/>
      </Routes>
    </Router>
  );
}

export default App;
