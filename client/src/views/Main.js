import React, { useEffect, useState } from 'react';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from 'axios';

export default () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    // cuando se renderiza el componente se llama a la api para poder hacrr la lista
    useEffect(() =>{
        axios.get("http://localhost:8000/products")
            .then(res=>{
                setProductList(res.data.products);
                setLoading(false);
                console.log("exito, productos:", productList);
            })
            .catch(err=>console.log("no se obtuvieron los productos",err));
    }, []);

    return (
        <>
            <h1>Product Form</h1>
            <ProductForm />
            <hr/>
            <ProductList loading={loading} list={productList}/>
        </>
    )
}