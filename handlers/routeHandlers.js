import { sightingEvents } from "../events/sightingEvents.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sanitizeBody } from "../utils/sanitizeBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res){
    const data = await getData();
    const payload = JSON.stringify(data);
    sendResponse(res, 200,  'application/json', payload);
}

export async function handlePost(req, res) {
    try{
        const parsedBody = await parseJSONBody(req);
        const cleanedBody = sanitizeBody(parsedBody);
        await addNewSighting(cleanedBody);
        sightingEvents.emit('sighting-added', cleanedBody);
        sendResponse(res, 201, 'application/json', JSON.stringify(cleanedBody));
    }
    catch(err){
        sendResponse(res, 400, 'application/json', JSON.stringify({error:err}))
    }
    
}