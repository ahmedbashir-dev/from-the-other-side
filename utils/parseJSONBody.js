export async function parseJSONBody(req){
    let body = '';
    try{
        for await (const chunk of req){
            body += chunk;
        }
        const parsedBody = JSON.parse(body);
        return parsedBody;
    }
    catch(err){
        throw new Error(`Invalid JSON format: ${err}`)
    }
    

}