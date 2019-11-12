import React from 'react';
import './HomeScreen.css';
import './Button.css';
import {Button} from 'semantic-ui-react';
//import Button from 'react-bootstrap/lib/Button';


export default class HomeScreen extends React.Component {
    componentDidMount(){
        document.title = "Alvizo's Engravings"
    }

    render() {
        return (
            <div className="App">
                <header className="Header">
                    <h1 className="HeaderTitleText">Alvizo's Engravings</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    <Button inverted className="CustomButton" onClick={() => window.open('https://www.github.com/alvizoj')}>
                        Github
                    </Button>
                    <Button inverted color="black" className="CustomBlackButton">
                        Dark
                    </Button>
                </div>
                
                <footer className="Footer">
                    <b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div>
        );
    }
}