import path from "node:path";

export function serveStatic(baseDir, filename){
        const filePath = path.join(baseDir, 'public', filename);
        return filePath;
}