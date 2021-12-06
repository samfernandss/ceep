import { Component } from "react";
import NotesCard from "./NotesCard/NotesCard";

class NotesList extends Component {
	render() {
		return(
			<ul>
				{ Array.of("Work", "Work", "College").map( (category, index) => {
					return (
						<li key={index}>
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