import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";
import AllEntriesView from "./AllEntriesView";

class App extends Component {
    state={
        categories: ["food", "thoughts", "other"],
        entries: []
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    onEntryFormSubmit = (value) => {
        this.setState((state) => {
            return { entries: [...state.entries, value]};
        });
    }

    render() {
        const { categories, entries } = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/entries" render={(props) => { return <AllEntriesView {...props} entries={entries} /> }} />
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/category" render={(props) => { return <CategorySelectionView {...props} categories={categories} /> }} />
                        <Route exact path="/entry/new/:id" render={(props) => { return <NewEntryView {...props} categories={categories} onEntryFormSubmit={this.onEntryFormSubmit}/> }} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;