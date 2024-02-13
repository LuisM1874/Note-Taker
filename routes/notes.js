const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');

// notes.get('/notes', (req, res) => {
//     readFile('.db/db.json').then((data) => res.json(JSON.parse(data)));
// });

//When /notes is loaded, the contents of the database are parsed from JSON
//associated with specific notes
notes.get('/:note_id', (req, res) => {
    const noteID = req.params.note_id;
    readFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id === noteId);
        return result.length > 0
        ? res.json(result)
        : res.json("No notes");
    });
});

//Delete request associated with unique id
// notes.delete('/:note_id', (req, res => {
//     const noteID = req.params.note_id;
//     readFile('./db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//         const result = json.filter((note) => note.note_id !== noteID);
//         writeToFile('./db/db.json', result);
//         res.json(`Note ${noteID} has been deleted!`)
//     });
// }));