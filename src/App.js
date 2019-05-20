import React, { Component } from 'react';
import Logo from './components/Logo';
import CardContainer from './components/CardContainer';
import './App.css';

class App extends Component {
    state = {
        animationComplete: false
    }

    handleComplete = completed => {
        if(completed){
            this.setState({ animationComplete: true })
        }
    }

    render() {
        return ( 
            <div className = "App" >
            <header className = "App-header" >
                <Logo handleComplete={this.handleComplete} />
            </header>
            { this.state.animationComplete ? <CardContainer  /> : null }
            </div>
        );
    }
}

export default App;