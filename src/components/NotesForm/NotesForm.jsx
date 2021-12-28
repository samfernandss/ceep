import React, { Component } from "react";
import "./style.css"

class NotesForm extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.description = "";
    }

    _handleTitleChange = (event) => {
        event.stopPropagation();
        this.title = event.target.value;
    }

    _handleDescriptionChange = (event) => {
        event.stopPropagation();
        this.description = event.target.value;
    }

    _saveNote = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.description);
        document.getElementById("note-form").reset();
    }

    render() {
        return (
            <form
                id="note-form"
                onSubmit={this._saveNote}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={this._handleTitleChange} />

                <textarea
                    rows={5}
                    placeholder="Write your note here..."
                    onChange={this._handleDescriptionChange}>
                </textarea>

                <button>Criar Nota</button>
            </form>
        );
    }
}

export default NotesForm;