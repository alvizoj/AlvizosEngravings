import React from 'react';
import './HomeScreen.css';
import './Button.css';
import {Button} from 'semantic-ui-react';
import picture from './resources/me.png'
import gmail from './resources/gmail.png'


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

                <div className="BusinessDescription">
                    <p className="HeaderDescText">Metal Engraving Services</p>
                        DESCRIPTION OF BUSINESS<br></br>
                        Based in Delano, CA
                </div>

                <div className="Gallery">
                    <img src={picture} alt="pic"/>
                    <h4>Engraving of AR-15. Price is $50 per 5 square inch engraving.</h4>
                    <br></br>
                    <button color='red' onClick={this.toggleImages}>{this.state.buttonText}</button>
                    {this.state.show && <ExtraImages/>}
                </div>

                <h2 className="HeaderTitleText">Contact me</h2>
                <div>
                    <img src={gmail} className="GmailIcon" alt="gmailIcon"/>
                    <Button inverted className="CustomBlackButton"><a href="mailto: bruh@gmail.com">Email Me</a></Button>
                </div>

                <footer className="Footer">
                    <b>{'\u00A9'} 2019 Joseph Alvizo. All rights reserved.</b>
                </footer>
            </div> /* Site Container */
        );
    }
}

function PicAndDescr() {
    return(
        <div>
            <img src={picture} alt="pic"/>
            <h4>Engraving of AR-15. Price is $50 per 5 square inch engraving.</h4>
        </div>
    );
}

class ExtraImages extends React.Component{
    render(){
        return(
        <div>
            <PicAndDescr></PicAndDescr>
            <PicAndDescr></PicAndDescr>
        </div>
        );
    }
}