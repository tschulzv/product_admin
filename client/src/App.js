import React, { useState, useEffect } from 'react';
import Main from './views/Main'
import ProductDetail from './views/ProductDetail';
import ProductEdit from './views/ProductEdit';
import axios from 'axios';
import cors from 'cors';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  // cuando se renderiza el componente se llama a la api para poder hacrr la lista
  useEffect(() =>{
      axios.get("http://localhost:8000/products")
          .then(res=>{
              setProductList(res.data.products);
              setLoading(false);
              console.log("[APP.JS]exito, productos:", res.data.products);
          })
          .catch(err=>console.log("no se obtuvieron los productos",err));
  }, []);

  
  const deleteProduct = (id) => {
    axios.delete("http://localhost:8000/products/"+id)
      .then(res => {
        deleteFromDOM(id);
        console.log("Producto borrado con exito")})
      .catch(err=>{console.log(err)});
  }

  //  borrar del DOM al producto eliminado
  const deleteFromDOM= (id) => {
    setProductList(productList.filter(product => product._id !== id));
    console.log("borrado del DOM");
  }

  const addToDOM = (product) => {
    setProductList([...productList, product]);
    console.log("agregado al DOM")
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element ={<Main loading={loading} productList={productList} deleteProduct={deleteProduct} addToDOM={addToDOM}/>}/>
        <Route path="/products/:id" element={<ProductDetail deleteProduct={deleteProduct}/>}/>
        <Route path="/:id/edit" element={<ProductEdit />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
