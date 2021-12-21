import React, { Component } from "react";
import NotesCard from "../NotesCard/NotesCard";
import "./style.css"

class NotesList extends Component {

	render() {
		return(
			<ul>
				{ this.props.notes.map( (note, index) => {
					return (
						<li
							key={index}
							className="notes-list">

							<NotesCard title={note.title} description={note.description}></NotesCard>
						</li>
					)
				})}
			</ul >
		);
	}
}

export default NotesList;