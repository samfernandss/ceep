import React, { Component } from "react";
import './App.css';
import CategoryList from "./components/CategoryList";
import NotesForm from "./components/NotesForm/";
import NotesList from "./components/NotesList/";
import Categories from "./data/Categories";
import NotesArray from "./data/Notes";

class App extends Component {

  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();
    // this.state = {
    //   notes: [],
    //   categories: []
    // };
  }

  // createNote = (title, description, category) => {
  //   const newNote = { title, description, category };
  //   const newArrayNotes = [...this.state.notes, newNote];
  //   const newState = {
  //     notes: newArrayNotes
  //   };

  //   console.log(newState);
  //   this.setState(newState);
  // }

  // deleteNote = (index) => {
  //   let arrayNotes = this.state.notes;
  //   arrayNotes.splice(index, 1);
  //   this.setState({ note: arrayNotes });
  // }

  // addCategory = (categoryName) => {
  //   const newArrayCategories = [...this.state.categories, categoryName];
  //   const newState = {...this.state, categories: newArrayCategories};
  //   this.setState(newState);
  // }

  render() {
    return (
      <>
        <header className="title">
          <h1>My Notes</h1>
        </header>

        <section>
          <NotesForm categories={this.categories.categories} createNote={this.notes.addNote} />

          <CategoryList addCategory={this.categories.addCategory} categories={this.categories.categories}/>
          <NotesList
            notes={this.notes.notes}
            deleteNote={this.notes.deleteNote}
          />
        </section>
      </>
    );
  }
}

export default App;
