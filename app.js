//use npm run start:dev to launch this 
const express = require('express');
const app = express();

//tell our app to use json
app.use(express.json());
app.use(express.static('public'));

//tell our server to listen on port 3000
app.listen(3000, console.log("Server started on port 3000"));

/////////////routes///////////////
app.get('/', (req,res) => {
    response.send('index.html');
});
