import * as express from "express";

const app = express();

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

app.get("/", (req, res) => res.send("The URL for products is http://localhost:8000/products"));

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
