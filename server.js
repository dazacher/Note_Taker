const express = require("express");
const path = require("path");
const notes = require("./Develop/db/db");
const uuidv4 = require("uuidv4");

const app = express();
const PORT = process.env.PORT || 3040;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("/Develop/public"));

app.get("/", function(req, res){
    console.log(`/ called`);
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"))
});


app.get("/notes", function(req, res){
    console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/Develop/public/notes.html"))
});




app.get("*", function(req, res){
    console.log(`/ called`);
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"))
});

app.listen(PORT, function (){
    console.log(`Server listening on PORT: ${PORT}`);
})