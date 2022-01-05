import React, { Component } from "react";
import NotesCard from "../NotesCard/NotesCard";
import "./style.css"

class NotesList extends Component {

	render() {
		return (
			<ul>
				{this.props.notes.map((note, index) => {
					return (
						<li
							key={index}
							className="note-item">

							<NotesCard
								index={index}
								deleteNote={this.props.deleteNote}
								title={note.title}
								description={note.description}
								category={note.category}
							/>
						</li>
					)
				})}
			</ul >
		);
	}
}

export default NotesList;