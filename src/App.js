import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";

class App extends Component {
    state={
        categories: ["food", "thoughts", "other"]
    }
    render() {
        const { categories } = this.state;

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={HomeView} />
                        <Route exact path="/category" render={props => <CategorySelectionView {...props} categories={categories} />} />
                        <Route exact path="/entry/new/:id" render={props => <NewEntryView {...props} categories={categories} />} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;