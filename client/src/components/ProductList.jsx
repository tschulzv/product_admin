import React, { useState } from 'react';

export default (props) => {
    return(
        <>
            {props.loading ? (<p>Loading...</p>) : (
            <>
                {props.list && props.list.map((product, index) => {
                    console.log('props.list:', props.list);
                    return (
                        // link contiene el id del producto
                        <p>
                            <a key={index} href={`http://localhost:3000/products/${product._id}`}>{product.title}</a>
                        </p>
                    )}
                )}
            </>)}
        </>
    )
}