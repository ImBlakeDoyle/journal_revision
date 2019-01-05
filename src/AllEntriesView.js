import React, { Component } from "react";
import { Link } from "react-router-dom";

class AllEntriesView extends Component {
    state = {entries: []}

    componentDidUpdate(){
        console.log(this.state);
    }
    render() {
        const { entries } = this.props;
        const { onEntryDeleteClick } = this.props;

    return (
        <div>
            <ul>
                {entries.map((item, index) => {
                            return (
                                <li key={item.entry}> 
                                    {item.entry}
                                    <button onClick={() => onEntryDeleteClick(item, index)}>Delete</button>
                                </li>
                                
                            );
                })}
            </ul>
            <Link to="/">Home</Link>
        </div>
    );
    }
}

export default AllEntriesView;