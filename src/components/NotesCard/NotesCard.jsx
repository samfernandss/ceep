import React, { Component } from "react";
import "./style.css";
import deleteSVG from "../../assets/img/delete.svg"

class NotesCard extends Component {
    render() {
        return (
            <section className="note-card">
				<header>
					<h3>{this.props.title}</h3>
                    <img src={ deleteSVG } />
				</header>
				<p>{this.props.description}</p>
			</section>
        )
    }
}

export default NotesCard;