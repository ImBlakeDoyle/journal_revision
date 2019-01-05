import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class EntryForm extends Component {
    state = { entry: "", errorMessage: "", redirect: false}

    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const { entry } = this.state;
        const { onEntryFormSubmit, category } = this.props;
        onEntryFormSubmit({ category, entry});
        this.setState({ entry: "" });
        this.setState({ redirect: true})
    }

    render() {
        const { entry, errorMessage, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/entries" />;
        }

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