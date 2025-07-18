import sanitizeHtml from "sanitize-html";
export function sanitizeBody(parsedBody){
    let sanitizedData = {};
    for(const [key, value] of Object.entries(parsedBody)){
        if(typeof value === 'string'){
            sanitizedData[key] = sanitizeHtml(value, {allowedTags:['b'], allowedAttributes:{}});
        }
        else{
            sanitizedData[key] = sanitizeHtml(value);
        }
    }
    return sanitizedData;
}