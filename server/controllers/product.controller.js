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

module.exports.createProduct = (req, res) => {
    console.log("dentro de createProduct");
    Product.create(req.body)
    .then(newProd => res.json({product : newProd}))
    .catch(err => res.json({msg: "ERROR", error: err}));
}
