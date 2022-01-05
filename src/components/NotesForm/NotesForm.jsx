import React, { Component } from "react";
import "./style.css"

class NotesForm extends Component {

    constructor(props) {
        super(props);
        this.title = "";
        this.description = "";
        this.category = "No category";
    }

    componentDidMount() {
        document.getElementById('button-submit').setAttribute('disabled', true);
        this._handleBehaviorButton();
    }

    _handleTitleChange = (event) => {
        event.stopPropagation();
        this.title = event.target.value;
        this._handleBehaviorButton();
    }

    _handleDescriptionChange = (event) => {
        event.stopPropagation();
        this.description = event.target.value;
        this._handleBehaviorButton();
    }
    
    _saveNote = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.createNote(this.title, this.description, this.category);
        document.getElementById("note-form").reset();
        this.title = '';
        this.description = '';
        this._handleBehaviorButton();
    }

    _handleBehaviorButton = () => {
        const buttonElement = document.getElementById('button-submit');

        if (!!this.title && !!this.description) {
            buttonElement.removeAttribute('disabled', false);
        } else {
            buttonElement.setAttribute('disabled', true);
        }
    }

    _handleCategoryChange = (event) => {
        event.stopPropagation();
        this.category = event.target.value;
    }

    render() {
        return (
            <form
                id="note-form"
                onSubmit={this._saveNote}>
                <select onChange={this._handleCategoryChange}>
                    <option>No Category</option>
                    {this.props.categories.map( category => {
                        return (<option>{category}</option>)
                    })}
                </select>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={this._handleTitleChange} />

                <textarea
                    rows="5"
                    placeholder="Write your note here..."
                    onChange={this._handleDescriptionChange}>
                </textarea>

                <button id="button-submit">Create Note</button>
            </form>
        );
    }
}

export default NotesForm;