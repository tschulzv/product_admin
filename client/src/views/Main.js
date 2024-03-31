import React, { useEffect, useState } from 'react';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default (props) => {
    return (
        <>
            <h1>Product Form</h1>
            <ProductForm addToDOM={props.addToDOM}/>
            <hr/>
            { props.loading ? ( <p>Loading...</p> ) : (
            <ProductList productList={props.productList} deleteProduct={props.deleteProduct}/>
            )}
        </>
    )
}