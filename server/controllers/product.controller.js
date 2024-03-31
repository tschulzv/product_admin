const Product = require("../models/product.model");

// CONTROLADORES
module.exports.getProducts = (req, res) => {
    Product.find({})
        .then((values) => {
            res.statusCode = 200
            res.json({products: values});
        })
        .catch((error) => {
            res.statusCode = 500
            res.json({error: error});
        })
}

module.exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.statusCode = 200
            res.json(product);
        })
        .catch((error) => {
            res.statusCode = 500
            res.json({error: error});
        })
}

module.exports.createProduct = (req, res) => {
    console.log("dentro de createProduct");
    Product.create(req.body)
    .then(newProd => res.json({product : newProd}))
    .catch(err => res.json({msg: "ERROR", error: err}));
}

module.exports.editProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => console.log(err));
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then( deletedProduct => {
    console.log("Producto borrado con éxito", deletedProduct);
        res.status(200).json({ message: "Product deleted successfully", deletedProduct });
    })
    .catch(err => {
        console.error("Error deleting product:", err);
        res.status(500).json({ error: err.message });
    });
}