import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewEntryView extends Component {
    state = { errorMessage: "", category: null}

    componentDidMount() {
        const { id } = this.props.match.params;
        const { categories } = this.props;

        if (!categories[id]) {
            return this.setState({ errorMessage: "Invalid category"});
        }
        return this.setState({ category: categories[id] });
    }

    render() {
        const { errorMessage, category } = this.state;

        return (
            <div>
                {errorMessage}
                {category &&
                    <div>
                        <Link to="/category"><button>Back To Categories</button></Link>
                        <h1>New { category} entry</h1>
                    </div>
                }
            </div>
        );
    }
}

export default NewEntryView;