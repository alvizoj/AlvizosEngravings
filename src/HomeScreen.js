import React from 'react';
import './HomeScreen.css';
import './Button.css';
import {Button} from 'semantic-ui-react';
import picture from './resources/me.png'


export default class HomeScreen extends React.Component {
    componentDidMount(){
        document.title = "Alvizo's Engravings"
    }

    constructor(props) {
        super(props)
        this.state = {show: false, buttonText: 'Show More'}
        this.toggleImages = this.toggleImages.bind(this);
    }

    toggleImages = () => {
        const {show} = this.state;
        this.setState({show: !show})
        if (this.state.buttonText === 'Show More')
            this.setState({buttonText: 'Show Less'})
        if (this.state.buttonText === 'Show Less')
            this.setState({buttonText: 'Show More'})
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
                <div>
                    <Button color='red' onClick={this.toggleImages}>{this.state.buttonText}</Button>
                    <br/> <br/>
                    {this.state.show && <ExtraImages/>}

                </div>
                
                <footer className="Footer">
                    <b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div> /* Site Container */
        );
    }
}

class ExtraImages extends React.Component{
    render(){
        return(
        <div>
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
        </div>
        );
    }
}