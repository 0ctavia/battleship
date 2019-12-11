window.alert("The javascript is included");

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
        await fetch('/game', options); 
    });
