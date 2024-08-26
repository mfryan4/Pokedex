import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Pokedex from './Pokedex';
import Search from './Search';

const App = (props) => {
 return (
  <div>
    
   <BrowserRouter>
    <div className="App">
    <header>
      <h1>Pokedex</h1>
      <Link to="/">Pokedex </Link>
      <Link to="/search">Search</Link>
    </header>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </div>
   </BrowserRouter>
  </div>
 );
}

export default App;