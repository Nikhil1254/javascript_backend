const http = require("http");
const fs = require('fs');
const PORT = 8080;

const productsPage = fs.readFileSync("pages/products.html", "utf-8");
const notFoundPage = fs.readFileSync("pages/notFound.html", "utf-8");
const products = JSON.parse(fs.readFileSync("data/products.json", "utf-8")).products;
const notFoundPageStyles = fs.readFileSync("styles/notFound.css", "utf-8");

// creating server object
const server = http.createServer((req, res) => {

    // console.log("path :", req.url); // will return path/route
    // console.log("method :", req.method); // will print method GET,POSt,PUT,DELETE
    console.log(req.method + " : " + req.url);
    let path = req.url;
    if (req.url.startsWith("/products")) {
        let productId = + (path.split("/")[2]);
        res.setHeader("content-type", "text/html");
        if (!productId) {
            res.writeHead(404,"Page Not Found.")
            res.end(notFoundPage);
            return;
        }

        let product = products.find(product => product.id == productId);
        let index = productsPage
            .replace("**title**", product.title)
            .replace("**price**", product.price)
            .replace("**rating**", product.rating);

        res.end(index);
        return;
    }

    switch (req.url) {
        case "/":
            res.setHeader("content-type", "text/html");
            res.end("<h1>Hello Guys !</h1>");
            break;

        case "/api": 
            res.setHeader("content-type", "application/json");
            res.end(JSON.stringify(products));
            break;

        case "/styles/notFound.css":
            res.setHeader("content-type", "text/css"); 
            res.end(notFoundPageStyles);
            break;

        default:
            res.writeHead(404,"Page Not Found");
            res.end(notFoundPage);
    }
})

server.listen(PORT);

/**
 * # Server mainly used for following 3 purpose
 * 1. serving static files like images or other assets
 * 2. templating ie. dynamic site generation / server side rendering
 * 3. API creation -> serving data
 */

// res.writeHead(status,msg)  msg will be shown after status code in network tag  
// res.end  to send the response - takes string as an input
// res.setHeader(name,value) - to set headers on response object
// listening for request on particular network port
// favicon.ico request google does from it's side to get image for favicon
// though browser search bar we can only send get request. To send other type of request we can use tool like postman
// if our end() is executing multiple time we get error. cause once end run means we already send response to client we cant again run it.
