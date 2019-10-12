import React from 'react';
import './App.css';
import logo from './logo.svg';

export default class HomeScreen extends React.Component {
    componentDidMount(){
        document.title = "Alvizo's Engravings - Home"
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to the mind of Joseph</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <footer className="Footer">
                    <p><b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b></p>
                </footer>
            </div>
        );
    }
}