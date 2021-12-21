import React, { Component } from "react";
import './App.css';
import NotesForm from "./components/NotesForm/";
import NotesList from "./components/NotesList/";

class App extends Component {

  constructor(){
    super();

    this.state = {
      notes: []
    };
  }

  createNote(title, description) {
    const newNote = {title, description};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    };

    console.log(newState);
    this.setState(newState);
  }

  render() {
    return (
      <section>
        <NotesForm
          className="notes-form-container"
          createNote={this.createNote.bind(this)}></NotesForm>
        
        <NotesList
          className="notes-list-container"
          notes={this.state.notes}></NotesList>
      </section>
    );
  }
}

export default App;
