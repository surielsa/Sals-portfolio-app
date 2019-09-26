//TODO add the actual JSX file names that link to the JSX files in the components folder)

import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import About from './components/about-me';




//TODO This portion of the app needs to be updated to the files in the components folder. Also delete the things you do not need. Make code clean.
class App extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <About></About>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
