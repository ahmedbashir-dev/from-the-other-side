import path from "node:path";
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";

export async function serveStatic(req, res, baseDir) {
    const publicDir = path.join(baseDir, 'public');
    const pathToResource = path.join(publicDir, req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(pathToResource);
    const contentType = getContentType(ext);
    try {
        const content = await fs.readFile(pathToResource);
        sendResponse(res, 200, contentType, content);
    } catch (err) {

        if(err.code === 'ENOENT'){
            const notFoundPath = path.join(baseDir, "public", "404.html");
            const notFoundContent = await fs.readFile(notFoundPath);
            sendResponse(res, 404, contentType, notFoundContent);
        }
        else{
            sendResponse(res, 500, 'text/html', `<html><h1>Server Error: ${err.code}</h1></html>`);
        }
    }
}