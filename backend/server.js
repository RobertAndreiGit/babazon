import express from 'express';
import data from './data';

const app = express();
const PORT = 5000;

app.get("/api/products", (req, res) => {
    res.send(data.products);
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})