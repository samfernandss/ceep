import { Component } from "react";
import "./style.css"

class NotesForm extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.description = "";
    }

    _handleTitleChange(event) {
        this.title = event.target.value;
    }

    _handleDescriptionChange(event) {
        this.description = event.target.value;
    }

    _saveNote(event) {
        event.preventDefault();
        this.props.createNote(this.title, this.description);
    }

    render() {
        return (
            <form onSubmit={this._saveNote.bind(this)}>
                <input type="text" placeholder="Title" onChange={this._handleTitleChange.bind(this)} />
                <textarea rows={5} placeholder="Write your note here..." onChange={this._handleDescriptionChange.bind(this)}></textarea>
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default NotesForm;