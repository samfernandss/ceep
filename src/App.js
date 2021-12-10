import React, { Component } from "react";
import './App.css';
import NotesList from "./components/NotesList/";
import NotesForm from "./components/NotesForm/";

class App extends Component{

  constructor(){
    super()
    this.notes = [];
  }

  createNote(title, description) {
    const newNote = {title, description};
    this.notes.push(newNote);
    console.log(this.notes);
  }

  render() {
    return (
      <section>
        <NotesForm createNote={this.createNote.bind(this)}></NotesForm>
        <NotesList notes={this.notes}></NotesList>
      </section>
    );
  }
}

export default App;
