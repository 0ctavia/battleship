//use npm run start:dev to launch this 
const express = require('express');
const app = express();

//tell our app to use json
app.use(express.json());
app.use(express.static('public'));

//tell our server to listen on port 3000
app.listen(3000, console.log("Server started on port 3000"));

///ROUTES///
app.get('/', (req,res) => {
    response.send('index.html');
});

app.post('/game',(req,res) => {
    if (req.body.type == "cats") {
    //start a player with a type:cats
    const playercats = new player("cats");
    playercats.lives();
    res.json({url:"http://localhost:3000/game.html"});
    console.log("redirecting to game page");
    }
    else if (req.body.type =="frogs"){
    //start a player with a type:frogs
    const playerfrogs = new player("frogs");
    playerfrogs.lives();
    res.json({url:"http://localhost:3000/game.html"});
    console.log("redirecting to game page");
    }
});
app.get('/game',(req,res) => {
    console.log("got a GET!");
    if (typeof playercats!="undefined"){
    //res.json(playercats)
    console.log("playercats is not empty")
    }
    else if (typeof playerfrogs!="undefined"){
    //res.json(playerfrogs)
    }
    else
    res.json({url:"http://localhost:3000/index.html"})
});
///CLASSES///

//players
class player {
constructor (type){
    this.type = type;
    this.boatsalive = 5;
    //add socket.id later
}
lifelost (){
        this.boatsalive-=1;
        console.log("You have " + this.boatsalive +" " + this.type + " left.");
    }
lives(){
        console.log("You currently have " + this.boatsalive + " boats.");
    }
}
