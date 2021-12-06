import { Component } from "react";
import "./style.css"

class NotesCard extends Component {
    render() {
        return (
            <section className="notes-card">
				<header>
					<h3>Título</h3>
				</header>
				<p>Escreva sua Nota...</p>
			</section>
        )
    }
}

export default NotesCard;