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
            <div className="Site">
                <header className="Header">
                    <h1 className="HeaderTitleText">Alvizo's Engravings</h1>
                    <p className="HeaderDescText">Metal Engraving Services</p>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="GalleryEntry">
                    <div className="GalleryEntryItem">
                        Varius vel pharetra vel turpis nunc eget lorem dolor. Nam at lectus urna duis convallis convallis tellus id. Ullamcorper morbi tincidunt ornare massa eget egestas. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Urna porttitor rhoncus dolor purus non. Orci nulla pellentesque dignissim enim sit. Erat velit scelerisque in dictum. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Nibh venenatis cras sed felis eget velit aliquet. Arcu felis bibendum ut tristique. Eleifend mi in nulla posuere sollicitudin aliquam. Duis at tellus at urna. Iaculis nunc sed augue lacus. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Purus in mollis nunc sed id semper. At in tellus integer feugiat scelerisque. Cras adipiscing enim eu turpis egestas pretium aenean.
                    </div>
                    <div className="GalleryEntryItem">
                        Engraving of AR-15. Price is $50 per 5 square inch engraving.
                    </div>
                </div>
                
                <footer className="Footer">
                    <b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div>
        );
    }
}