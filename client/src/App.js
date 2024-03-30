import React from 'react';
import Main from './views/Main'
import ProductDetail from './views/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element ={<Main />}/>
        <Route path="/products/:id" element={<ProductDetail />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
