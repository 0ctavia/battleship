///INDEX PAGE///

//clicking the buttons redirects to another page
document.getElementById("cats").addEventListener("click", async () => {
        //when we later use socket.io, you can store socket.io
        const playertype = {type: "cats"};
        const options = { 
            method : "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(playertype)
        };
        const redirect = await fetch('/game', options); 
        const relocateurl = await redirect.json();
        console.log(relocateurl.url);
        window.location = relocateurl.url;
});
document.getElementById("frogs").addEventListener("click", async () => {
        //when we later use socket.io, you can store socket.id
        const playertype = {type: "frogs"};
        const options = { 
            method : "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(playertype)
        };
        const redirect = await fetch('/game', options); 
        const relocateurl = await redirect.json();
        console.log(relocateurl.url);
        window.location = relocateurl.url;
    });


