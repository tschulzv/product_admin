import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    /*
    useEffect(() => {
        console.log("id: ", id);
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:8000/products/",id);
            console.log(response.data);
            setProduct(response.data);
          } catch (error) {
            console.log("no se pudo obtener el producto")
          }
        };
    }, [id]);
    */
    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/products/"+id)
            .then(res => {setProduct(res.data)})
            .catch(err=>{console.log(err)})
    }, []);
    console.log(product);
    
    return (
        <>
            {(!product) ? (<p>Loading...</p>) : (
            <>
                <h1>{product.title}</h1>
                <p>Precio: {product.price}</p>
                <p>{product.description}</p>
            </>
            )}
        </>
    )

}