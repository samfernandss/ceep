export default class NotesArray {
    constructor() {
        this.notes = [];
    }

    addNote = (title, description, category) => {
        const newNote = new Note (title, description, category);
        this.notes.push(newNote);
    }

    deleteNote = (index) => {
        this.notes.splice(index, 1);
    }
}

class Note {
    constructor (title, description, category) {
        this.title = title;
        this.description = description;
        this.category = category;
    }
}