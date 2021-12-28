import React, { Component } from "react";
import './App.css';
import NotesForm from "./components/NotesForm/";
import NotesList from "./components/NotesList/";

class App extends Component {

  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  createNote = (title, description) => {
    const newNote = { title, description };
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes: newArrayNotes
    };

    console.log(newState);
    this.setState(newState);
  }

  deleteNote = (index) => {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index, 1);
    this.setState({ note: arrayNotes });
    console.log("teste");
  }

  render() {
    return (
      <>
        <header className="title">
          <h1>My Notes</h1>
        </header>

        <hr></hr>

        <section>
          <NotesForm
            className="notes-form-container"
            createNote={this.createNote}
          />

        <hr className="half-line"></hr>

          <NotesList
            className="notes-list-container"
            notes={this.state.notes}
            deleteNote={this.deleteNote}
          />
        </section>
      </>
    );
  }
}

export default App;
