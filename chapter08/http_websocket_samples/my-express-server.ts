import * as express from "express";
import * as path from "path";

const app = express();

app.use("/", express.static(path.join(__dirname, "..", "client")));
app.use("/node_modules", express.static(path.join(__dirname, "..", "node_modules")));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../client/index.html")));

class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) { }
}

const products = [
    new Product(0, "First product", 24.99),
    new Product(1, "Second product", 64.99),
    new Product(2, "Third product", 74.99)
];

function getProducts(): Product[] {
    return products;
}

app.get("/products", (req, res) => res.json(getProducts()));

function getProductsById(productId: number): Product {
    return products.find(p => p.id === productId);
}

app.get("/products/:id", (req, res) => {
    res.json(getProductsById(parseInt(req.params.id)));
});


const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();

    console.log("Listening on http://localhost:" + port);
});
