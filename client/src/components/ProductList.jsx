import { Link } from 'react-router-dom';

export default (props) => {

    return(
        <>
            {props.productList && props.productList.map((product, index) => {
                    console.log('props.list:', props.productList);
                    return (
                        // link contiene el id del producto
                        <p>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                            <Link to={`/${product._id}/edit`}> [EDITAR]</Link>
                            <button onClick={() => props.deleteProduct(product._id)}>Eliminar</button>

                        </p>
                    )}
            )}
        </>
    )
}