'use strict';
import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            messages: [
                "hello there how are you?",
                'I am fine'
            ]
        };
    }
    render(){
        debugger;
        var messageNodes = this.state.messages.map((message) => {
            return (
                <div style={{color: 'green'}}>{message}</div>
            );
        });

        return(
            <div>{messageNodes}</div>
        );
    }
}

export default App;
