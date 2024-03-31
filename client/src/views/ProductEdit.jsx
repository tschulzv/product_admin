import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";

export default (props) => {
    // obtener el id del producto
    const { id } = useParams();
    const [product, setProduct] = useState();

    // obtener detalles de la api
    useEffect(() => {
        axios.get("http://localhost:8000/products/"+id)
        .then(res => {
            setProduct(res.data);
            console.log("Exito", res.data);
        })
        .catch(err=> {console.log(err)});
    }, [])

    const handleChange = (e) => {
        // cambiar el campo que se haya modificado c/ el form
        setProduct({
            ...product, [e.target.name] : e.target.value
        })
    }

    // pasarle a axios
    const handleSubmit = (e) => {
        e.preventDefault();
        // hacer el contacto con el servidor para crear nuevo producto en la DB
        axios.put("http://localhost:8000/"+id+"/edit", product)
            .then(res => console.log("Producto editado con exito", res))
            .catch(err=>console.log(err));
    }

    return (
        <>
        {(!product) ? (<p>Loading...</p>) : (
            <>
                <form className="form" onSubmit={handleSubmit}>
                    <p>
                        <label>Title</label>
                        <input name="title" type="text" value={product.title} onChange={e=>handleChange(e)}></input>
                    </p>
                    <p>
                        <label>Price</label>
                        <input name="price" type="number" value={product.price} onChange={e=>handleChange(e)}></input>
                    </p>
                    <p>
                        <label>Description</label>
                        <input name="description" type="text" value={product.description} onChange={e=>handleChange(e)}></input>
                    </p>            
                    <input type="submit" value="submit."/>
                </form>
            </>)}
        </>
    )
}