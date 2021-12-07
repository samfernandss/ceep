import { Component } from "react";
import NotesCard from "../NotesCard/NotesCard";
import "./style.css"

class NotesList extends Component {
	render() {
		return(
			<ul>
				{ Array.of("Work", "Work", "College").map( (category, index) => {
					return (
						<li key={index} className="notes-list">
							<div>{ category }</div>
							<NotesCard></NotesCard>
						</li>
					)
				})}
			</ul >
		);
	}
}

export default NotesList;