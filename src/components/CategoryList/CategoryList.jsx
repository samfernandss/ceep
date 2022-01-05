import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
    _handleInputEvent(event) {
        if (event.key === 'Enter') {
            let categoryName = event.target.value;
            this.props.addCategory(categoryName);
        }
    }

    render() {
        return (
            <>
                <ul>
                    {this.props.categories.map((category, index) => {
                        return <li key={index}>{category}</li>
                    })}
                </ul>
                <input type="text" placeholder="Add category" onKeyDown={this._handleInputEvent.bind(this)}/>
            </>
        );
    }
}

export default CategoryList;