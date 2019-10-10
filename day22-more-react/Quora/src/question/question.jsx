import React from 'react';
import './index.scss';

export default class Question extends React.Component {
  render() {
    return (
      <div className="quora">
        <div className="quora__name">
          {this.props.question} {this.props.answer}
        </div>
      </div>
    );
  }
}
