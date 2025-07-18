import { addNewSighting } from "../utils/addNewSighting.js";
import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";

export async function handleGet(res){
    const data = await getData();
    const payload = JSON.stringify(data);
    sendResponse(res, 200,  'application/json', payload);
}

export async function handlePost(req, res) {
    try{
        const parsedBody = await parseJSONBody(req);
        await addNewSighting(parsedBody);
        sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody));
    }
    catch(err){
        sendResponse(res, 400, 'application/json', JSON.stringify({error:err}))
    }
    
}