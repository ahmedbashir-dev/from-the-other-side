import { getData } from "./getData.js";
import fs from 'node:fs/promises';
import path from "node:path";

export async function addNewSighting(parsedBody){
    try {
        const sightings = await getData();
        sightings.push(parsedBody);
        const fileRelativePath = path.join('data','data.json');
        await fs.writeFile(fileRelativePath, JSON.stringify(sightings,4), "utf8");
        
    } catch (err) {
        throw new Error("Error while adding a new sight")
    }

}