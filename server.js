import http from "node:http";
import fs from "node:fs/promises";
import { serveStatic } from "./utils/serveStatic.js";
const PORT = 8000;

const __dirname = import.meta.dirname; // current module's directory



const server = http.createServer(async (req, res) => {
    const pathToResource = serveStatic(__dirname, 'index.html');
    const content = await fs.readFile(pathToResource, 'utf8');
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(content);


})

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))