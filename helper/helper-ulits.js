export async function getAllEvents(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json()).then((data) => data.splice(0 , 10));

    return response
}
export async function getSingleEvents(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then((res) => res.json()).then((data) => data);
    return response
}

export async function getAllEventsPaginated(startpoint , endpoint){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json()).then((data) => data.splice(startpoint , endpoint));
    return response
}   