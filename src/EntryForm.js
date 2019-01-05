import React, { Component } from "react";
import { Link } from "react-router-dom";

class EntryForm extends Component {
    state = { entry: "", errorMessage: ""}

    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { entry } = this.state;
        const { onEntryFormSubmit, category } = this.props;
        onEntryFormSubmit({ category, entry});
        this.setState({ entry: "" });
    }

    render() {
        const { entry, errorMessage } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <textarea value={entry} onChange={this.onTextAreaChange} />
                    {errorMessage}
                </div>
                    <input type="submit" value="create new entry" />
                    <Link to="/entries"><button>View all entries</button></Link>
            </form>
        );
    }
}

export default EntryForm;