//Import the built-in http module
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

//read the products data from products.json
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const productsFilePath = path.join(__dirname, 'products.json')

//Helper function o read the JSON file
 const readProductsFromFile = (callback) => {
    fs.readFile(productsFilePath, 'utf8', (err,data) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(data))
        }
    })
 }

//Define the port the server will listen on
const port = 3002;

//Create an HTTP server
const server = http.createServer((req, res) => {

    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello, World!\n')
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parsedUrl.pathname;
    const method = req.method;

    // GET /product - Return all products
    if(method === 'GET' && path === '/product'){
        readProductsFromFile((products) => {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(products))
        })
    }

    //GET /product/:id - Return a producy by ID
    else if (method === 'GET' && path.match(/^\/product\/\d+$/)){
        const id = parseInt(path.split('/')[2]);

        readProductsFromFile((products) => {
            const product = products.find(p => p.id === id);

            if(product) {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(product))
            } else {
                res.writeHead(404, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({ message: 'Product not found '}))
            }
        })
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Route not found'}))
    }
}) 

//Start the server and listen on port 3002
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})