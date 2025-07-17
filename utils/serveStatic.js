import path from "node:path";
import fs from "node:fs/promises"
import { sendResponse } from "./sendResponse.js";

export async function serveStatic(req, res, baseDir, filename, mime, status) {
    const filePath = path.join(baseDir, 'public', filename);
    try {
        const content = await fs.readFile(filePath);
        sendResponse(res, mime, status, content);
    } catch (err) {
        console.log(err);
    }
}