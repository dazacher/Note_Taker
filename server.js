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
    res.sendFile(path.join(__dirname, "/Develop/public/html/index.html"))
});


app.get("/notes", function(req, res){
    console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/Develop/public/html/notes.html"))
});

app.get("/api/notes", function (req, res){
    console.log("/api/notes called");
    res.json(notes);
});

app.get("/api/notes/:id", function (req, res){
    console.log(`/api/notes/${req.params.id} called`);
    
    let noteId = req.params.id;
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === noteId) {
            console.log(notes[i]);

            return res.json(notes[i]);
        }
    }

    return res.json(false);
});

app.get("*", function(req, res){
    console.log(`/ called`);
    res.sendFile(path.join(__dirname, "/Develop/public/html/index.html"))
});

app.post("/api/notes", function (req, res){
    console.log("POST /api/notes called");

    const newNote = req.body;
    console.log(newNote);
    newNote.push(notes);
    res.json(notes);
});

app.listen(PORT, function (){
    console.log(`Server listening on PORT: ${PORT}`);
});