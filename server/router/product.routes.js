const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.post("/create", ProductController.createProduct);
    app.get("/products", ProductController.getProducts);
    app.get("/products/:id", ProductController.getOneProduct);
}