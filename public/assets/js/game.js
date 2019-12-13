window.onload = async () => {
    const options = {
        method : "get",
        headers:
            {'Content-Type' : 'application/json'} 
    }
    const serverres = await fetch("/game", options);
    //const serverresjson = await serverres.json;
    //console.log(serverresjson);
}

