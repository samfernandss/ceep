import { Component } from "react";

class NotesForm extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Título"/>
                <textarea placeholder="Descrição"></textarea>
                <button>Criar Nota</button>
            </form>
        );
    }
}

export default NotesForm;