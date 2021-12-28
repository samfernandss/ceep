import React, { Component } from "react";
import "./style.css";
//import deleteSVG from "../../assets/img/delete.svg"
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg"

class NotesCard extends Component {

    delete = () => {
        const index = this.props.index;
        this.props.deleteNote(index);
    }

    render() {
        return (
            <section className="note-card">
                <div className="note-card-container">
                    <h3>{this.props.title}</h3>

                    {/* <img src={ deleteSVG } /> */}

                    <DeleteSVG
                        className="delete-icon"
                        onClick={this.delete}
                    />
                </div>

                <p>{this.props.description}</p>
            </section>
        )
    }
}

export default NotesCard;