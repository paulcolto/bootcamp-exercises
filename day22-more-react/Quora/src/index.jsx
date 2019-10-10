import React from 'react';
import ReactDOM from 'react-dom';

import Question from './question/question.jsx';
import './index.scss';
import './index.html';

class App extends React.Component {
  render() {
    return (
      <div>
      <Question 
        question="What is your favourite colour?" 
        answer="Orange"
      />
      <Question 
        question="What is your favourite day?" 
        answer="Tuesday"
      />
      <Question 
        question="What is your favourite type of clothes?" 
        answer="Trousers"
      />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
