import React from 'react';
import './HomeScreen.css';
import './Button.css';
import {Button} from 'semantic-ui-react';
//import Button from 'react-bootstrap/lib/Button';
import picture from './resources/me.png'


export default class HomeScreen extends React.Component {
    componentDidMount(){
        document.title = "Alvizo's Engravings"
    }

    render() {
        return (
            <div className="Site">
                <header className="Header">
                    <h1 className="HeaderTitleText">Alvizo's Engravings</h1>
                </header>
                <p className="BusinessDescription">
                    <p className="HeaderDescText">Metal Engraving Services</p>
                    DESCRIPTION OF BUSINESS<br></br>
                    Based in Delano, CA
                </p>
                <div className="GalleryEntry">
                    <img src={picture}/>
                    <div >
                        Engraving of AR-15. Price is $50 per 5 square inch engraving.
                    </div>
                </div>
                <div className="GalleryEntry">
                    <img src={picture}/>
                    <div >
                        Engraving of AR-15. Price is $50 per 5 square inch engraving.
                    </div>
                </div>
                <div className="GalleryEntry">
                    <img src={picture} />
                    <div >
                        Engraving of AR-15. Price is $50 per 5 square inch engraving.
                    </div>
                </div>
                
                <footer className="Footer">
                    <b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div> /* Site Container */
        );
    }
}