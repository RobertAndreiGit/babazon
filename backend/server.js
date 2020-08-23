import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import data from './data';
import config from './config';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => console.log(err.reason));

const app = express();
const PORT = 5000;

app.use("/api/users", userRoute);
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