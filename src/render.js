import App from './App';
import {addPost} from './state';
import {postChange} from './state';
import {addMessage} from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {messageChange} from './state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <App 
            state={state} 
            addPost={addPost} 
            postChange={postChange} 
            addMessage={addMessage}
            messageChange={messageChange}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}
  

export default rerenderEntireTree;