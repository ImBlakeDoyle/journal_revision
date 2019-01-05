import React, { Component } from "react";

class EntryForm extends Component {
    state = { entry: ""}

    onTextAreaChange = (event) => {
        this.setState({ entry: event.target.value });
    }

    render() {
        const { entry } = this.state;

        return (
            <form>
                <div>
                    <textarea value={entry} onChange={this.onTextAreaChange}></textarea>
                </div>
                    <input type="submit" value="create new entry" />
            </form>
        );
    }
}

export default EntryForm;