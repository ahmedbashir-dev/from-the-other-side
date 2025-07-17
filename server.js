import http from "node:http";
import fs from "node:fs/promises";
import { serveStatic } from "./utils/serveStatic.js";
import { sendResponse } from "./utils/sendResponse.js";
const PORT = 8000;

const __dirname = import.meta.dirname; // current module's directory



const server = http.createServer(async (req, res) => {
        await serveStatic(req, res, __dirname, 'index.html','text/html', 200);  
})

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))