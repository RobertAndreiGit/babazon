import express from 'express';
import data from './data';

const app = express();
const PORT = 5000;

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." })
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});