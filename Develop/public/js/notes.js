$(document).ready(function () {
    $("#note-save").on("click", function (event) {
        event.preventDefault();
        let newNote = {
            id: uuidv4(),
            title: $(".note-title").val().trim(),
            text: $(".note-textarea").val().trim()


        };

        $
            .post("/api/notes", newNote)
            .then(function (data) {
                console.log(data);
                alert("Adding note...");
            });
    });
});