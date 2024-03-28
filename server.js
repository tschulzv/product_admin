const express = require("express");
const cors = require("cors");
const app = express();
require("./server/config/mongoose.config");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importar las rutas y pasarles la app
require("./server/router/product.routes")(app);
app.listen(8000, () => {
    console.log("listening on port 8000");
})