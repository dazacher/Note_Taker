const express = require("express");
const path = require("path");
const notes = require("./Develop/db/db");
const { uuid } = require('uuidv4');
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3040;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./Develop/public"));

app.get("/", function (req, res) {
    console.log(`/ called`);
    res.sendFile(path.join(__dirname, "/Develop/public/assets/html/index.html"))
});


app.get("/notes", function (req, res) {
    console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/Develop/public/assets/html/notes.html"))
});

app.get("/api/notes", function (req, res) {
    console.log("/api/notes called");
    fs.readFile("./Develop/db/db.json", "Utf-8", function (err, data) {
        console.log(data);
        res.json(JSON.parse(data));
    });
});

app.get("/api/notes/:id", function (req, res) {
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

app.get("*", function (req, res) {
    console.log(`/ called`);
    res.sendFile(path.join(__dirname, "/Develop/public/assets/html/index.html"))
});

app.post("/api/notes", function (req, res) {
    console.log("POST /api/notes called");
    fs.readFile("./Develop/db/db.json", "Utf-8", function (err, data) {
        var notes = JSON.parse(data);
        console.log(notes);
        // const newNote = { title, text, id: uuid() };
        const newNote = req.body;
        console.log("newNote-----------------------------------------------")
        console.log(newNote);
        newNote.id = uuid();

        notes.push(newNote);
        console.log(notes);
        fs.writeFile("./Develop/db/db.json", JSON.stringify(notes), function () {
            res.json(newNote);
        })
    })
});

app.delete("/api/notes/:id", function (req, res) {
    console.log("/api/notes/:id called");

    fs.readFile("./Develop/db/db.json", "Utf-8", function (err, data) {

        var notes = JSON.parse(data);
        console.log(notes);
        notes = notes.filter(note => note.id != req.params.id);
        // notes = filteredNotes;
        // Delete the note with the .splice function
        // for (i = 0; i < notes.length; i++) {
        //     console.log(notes[i].id);
        //     if (notes[i].id === req.params.id) {
        //         notes.splice(i, 1)
        //     }
        // }
        fs.writeFile("./Develop/db/db.json", JSON.stringify(notes), function () {
            res.json(notes);
        })

        if (err) throw err;
        console.log(notes);
    });

});

app.listen(PORT, function () {
    console.log(`Server listening on PORT: ${PORT}`);
});