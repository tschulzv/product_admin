import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState();
  
    useEffect(() => {
        console.log(id);
        axios.get("http://localhost:8000/products/"+id)
            .then(res => {setProduct(res.data)})
            .catch(err=>{console.log(err)})
    }, []);

    const handleDelete = (productId) => {
      props.deleteProduct(productId);
      // volver al inicio
      navigate('/');
    };


    
    return (
        <>
            {(!product) ? (<p>Loading...</p>) : (
            <>
                <h1>{product.title}</h1>
                <p>Precio: {product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => handleDelete(product._id)}>Eliminar</button>
            </>
            )}
        </>
    )

}