import React, {useState} from 'react';
import axios from "axios";

export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    // pasarle a axios
    const handleSubmit = (e) => {
        e.preventDefault();
        let newProduct = {title, price, description};
        // hacer el contacto con el servidor para crear nuevo producto en la DB
        axios.post("http://localhost:8000/create", newProduct)
            .then(res => { 
                console.log("PRODUCTO CREADO", res);
                console.log(newProduct);
                props.addToDOM(newProduct)})
            .catch(err=>console.log(err));
    }

    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <p>
                <label>Title</label>
                <input type="text" value={title} onChange={e=>setTitle(e.target.value)}></input>
            </p>
            <p>
                <label>Price</label>
                <input type="number" value={price} onChange={e=>setPrice(e.target.value)}></input>
            </p>
            <p>
                <label>Description</label>
                <input type="text" value={description} onChange={e=>setDescription(e.target.value)}></input>
            </p>            
            <input type="submit" value="Submit"/>
        </form>
    )
}