const express = require("express")
const path = require("path");
const ProductManager = require("./ProductManager");
const pathDB = path.join(`${__dirname}/db.json`)
const products = new ProductManager(pathDB)

PORT = 8080

const app = express()

app.use(express.urlencoded({ extends: true }));
app.use(express.json()); 

app.get("/", (request, response) => {
    response.send("API LIVE")
})

app.get("/products", (request, response) => {
    products.getProducts().then(result => {
        if (request.query.limit){
            response.status(200).json(result.slice(0,request.query.limit));
        } else{
            response.status(200).json(result);
        }
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
})

app.get("/products/:pid", (request, response) => {
    const id = Number(request.params.pid)
    products.getProducts().then(result => {
        const productId = result.find(e => e.id === id)
        if (!productId){
            console.error("No se encuentra ese id");
            response.sendStatus(500);
        } else{
            const index = result.indexOf(productId);
            return response.status(200).json(result[index]);
        }
    }).catch(err => {
        console.log(err);
        response.sendStatus(500);
    });
})

app.listen(PORT, () => {
    console.log("SERVER FUNCIONANDO")
})