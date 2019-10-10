import React from 'react';
import ReactDOM from 'react-dom';

import Contact from './contact/contact.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <div>
      <Contact 
        firstName="Homer" 
        lastName="Simpson"
        email="homer@springmail.com" 
      />
      <Contact 
        firstName="Marge" 
        lastName="Simpson"
        email="marge@springmail.com" 
      />
      <Contact 
        firstName="Lisa" 
        lastName="Simpson"
        email="lisa@springmail.com" 
      />
      <Contact 
        firstName="Bart" 
        lastName="Simpson"
        email="bart@springmail.com" 
      />
      <Contact 
        firstName="Maggie" 
        lastName="Simpson"
        email="maggie@springmail.com" 
      />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
