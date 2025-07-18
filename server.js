import http from "node:http";
import fs from "node:fs/promises";
import { serveStatic } from "./utils/serveStatic.js";
import { sendResponse } from "./utils/sendResponse.js";
import { getData } from "./utils/getData.js";
import { handleGet, handlePost } from "./handlers/routeHandlers.js";
const PORT = 8000;

const __dirname = import.meta.dirname; // current module's directory


const server = http.createServer(async (req, res) => {
        if(req.url === '/api'){
            if(req.method === 'GET'){
                await handleGet(res);
            }
            else if(req.method === 'POST'){
                await handlePost(req, res);
            }
        } 
        else if(!req.url.startsWith("/api")){
            return await serveStatic(req, res, __dirname)
        }
})

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))