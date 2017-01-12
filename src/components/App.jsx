'use strict';
import React from 'react';
import MessageList from './MessageList.jsx';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            messages: [
                "hello there how are you?",
                'I am fine?'
            ]
        };
    }
    render(){
      return (
          <MessageList />
      )
    }
}

export default App;
