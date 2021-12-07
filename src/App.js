import React, { Component } from "react";
import './App.css';
import NotesList from "./components/NotesList/";
import NotesForm from "./components/NotesForm/";

class App extends Component{
  render() {
    return (
      <section>
        <NotesForm></NotesForm>
        <NotesList></NotesList>
      </section>
    );
  }
}

export default App;
