import React, { Component } from 'react';
import { TimelineLite, TweenLite } from "gsap/TweenMax";
import logo from '../logo.svg';
import DrawSVG from '../gsap-bonus/DrawSVGPlugin.js';

class Logo extends Component {
    state = {
        animationComplete: false
    }

    componentDidMount(){
        TweenLite.set(".svg-line", {visibility:"visible"});
        const tl = new TimelineLite({ onComplete: this.completed});
        tl.fromTo(".svg-line", 5, {drawSVG:0, opacity: 0}, {drawSVG:"102%", opacity: 1}, "-=1").delay(1);
        tl.fromTo(".App-logo", 2, {left: "50%", top: "50%", height: '500px', transform: "translate(-50%,-50%)", position: "absolute"}, {left: "0px",  top: "10px", height: "90px", transform: "translate(0%,0%)"}, "-=1", "ease").delay(1);
        tl.fromTo(".svg-line", 2, {fill: "none"}, {fill: "#fff"}, "-=1").delay(3);
    }
    
    completed = () => {
       this.props.handleComplete(true);
    }

    render(){
        return(
            <div class="logo__wrapper">
                     
<svg x="0px" y="0px" className="App-logo" height="150px" width="400px" viewBox="0 0 111 50"> <g> <g> <g> <path className="svg-line" d="M63.2,32.5V16.3l-8.8,0.5v0.8c2.2,0,2.8,0.8,2.8,1.9v13c0,0.9-0.6,1.3-2.8,1.4v0.8h11.4v-0.8
C63.6,33.8,63.2,33.4,63.2,32.5z"></path> </g> <g> <path className="svg-line" d="M11.7,32.9c-1.8,0-2.3-1.1-2.3-3.3V18.3h5.5v-1.7H9.4V9.9l-5.9,1.7v5L0,17.3v1.1h3.4v10.9c0,4.3,2.7,5.7,5.9,5.7
c3.2,0,4.7-1.4,5.8-4.4l-0.9-0.4C13.4,32,12.5,32.9,11.7,32.9z"></path> </g> <g> <path className="svg-line" d="M29.9,16.2c-0.1,0-0.3,0-0.4,0c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.3,0c0,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0
c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c-1.3,0.5-2.5,1.4-3.3,2.8v0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
c-0.1,0.2-0.2,0.4-0.3,0.6v-3.7l-8.6,0.5v0.8c2.2,0,2.6,0.8,2.6,1.9v13c0,0.9-0.4,1.3-2.6,1.4v0.8h12.2v-0.8
c-3-0.1-3.6-0.4-3.6-1.4V21.1c0,0,0,0,0,0c0.8-1.3,2.2-2.2,2.9-2.3c0,0,0,0,0,0c-0.1,0.4-0.2,0.9-0.2,1.3c0,1.6,1.2,3.1,3.3,3.1
c1.8,0,3.1-1.4,3.1-3.5C33.7,17.7,32.4,16.2,29.9,16.2z"></path> </g> <g> <path className="svg-line" d="M87.3,32.5V22c0-3.8-1.5-5.9-4.9-5.9c-2.5,0-5.1,1.5-6.7,3.9v-1.4v-3.5V8.5l0,0C75.5,3.8,71.2,0,66,0c0,0,0,0,0,0
c-4.6,0-9.9,3.5-9.6,9.5c0.1,1.1,0.5,2.2,1.3,3c0.6,0.6,1.4,1.1,2.6,1.1c1.9,0,3.5-1.6,3.5-3.5c0-1.9-1.6-3.5-3.5-3.5
c-0.2,0-0.4,0-0.6,0.1c-0.2,0-0.4,0.1-0.6,0.2c0,0-0.1,0-0.1,0.1c-0.3,0.1-0.6-0.1-0.7-0.2c-0.2-0.3-0.2-1,0.1-1.5
c1.5-2.6,4.4-4.3,7.8-4.3c4.8,0,8.7,3.6,8.7,8c0,4-3.2,7.4-7.4,7.9c-0.1,0-0.2,0-0.3,0v0c0,0,0,0,0,0v0.8c0,0,0,0,0,0v0
c2.2,0,2.6,0.8,2.6,1.9v0.7v12.2c0,0.9-0.4,1.3-2.6,1.4v0.8h10.6v-0.8c-1.3,0-1.9-0.4-1.9-1.4V21.1c1-1.2,1.9-1.9,3.1-1.9
c1.8,0,2.5,0.8,2.5,2.9v10.4c0,0.9-0.6,1.3-2,1.4v0.8h10.6v-0.8C87.7,33.8,87.3,33.4,87.3,32.5z"></path> </g> <g> <path className="svg-line" d="M110.7,32.5c-2,0.9-2.7,0.6-2.7-1.4v-8.5c0-2.7-0.9-4.5-2.6-5.5c-1.2-0.7-2.9-1.1-5-1.1c-6,0-8.4,1.5-8.4,3.9
c0,1.6,1.3,2.9,3,2.9c1.9,0,3-1.1,3-2.9c0-0.8-0.3-1.5-0.8-2.1c0.1-0.1,1.1-0.8,2.2-0.8c1.6,0,2.5,0.6,2.7,2.5
c0,0.3,0.1,0.7,0.1,1.1v3.6c-1.6,0.4-6,0-8.7,1.5c-1.6,0.9-2.5,2.6-2.5,4.2c0,2.3,1.7,4.9,5.6,4.9c2.6,0,4.4-1.5,5.8-3h0.2
c0.4,2,1.6,3,4.2,3c1.7,0,3-0.7,4.4-1.8L110.7,32.5z M102,30.5c-0.5,0.8-1.5,1.7-2.4,1.7c-1.5,0-2.5-0.9-2.5-2.8c0-2.9,1-3.6,4.9-4
V30.5z"></path> </g> <g> <path className="svg-line" d="M51.3,31.2v-8.5c0-2.7-0.9-4.5-2.6-5.5c-1.2-0.7-2.9-1.1-5-1.1c-6,0-8.4,1.5-8.4,3.9c0,1.6,1.3,2.9,3,2.9
c1.9,0,3-1.1,3-2.9c0-0.8-0.3-1.5-0.8-2.1c0.1-0.1,1.1-0.8,2.2-0.8c1.6,0,2.5,0.6,2.7,2.5c0,0.3,0.1,0.7,0.1,1.1v3.6
c-1.6,0.4-6,0-8.7,1.5c-1.6,0.9-2.5,2.6-2.5,4.2c0,2.3,1.7,4.9,5.6,4.9c2.6,0,4.4-1.5,5.8-3h0.2c0.4,2,1.6,3,4.2,3
c1.7,0,3-0.7,4.4-1.8L54,32.5C52.1,33.5,51.3,33.1,51.3,31.2z M45.4,30.5c-0.5,0.8-1.5,1.7-2.4,1.7c-1.5,0-2.5-0.9-2.5-2.8
c0-2.9,1-3.6,4.9-4V30.5z"></path> </g> </g> </g> </svg>
            </div>
        )
    }
        
}
export default Logo;