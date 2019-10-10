import React from 'react';
import './index.scss';

export default class Term extends React.Component {
  render() {
    return (
      <div className="term">
        <div className="term__name">
          {this.props.term}
        </div>
        <div className="term__description">
          {this.props.description}
        </div>
        <div className="term__origin">
          {this.props.origin}
        </div>
        <button className="term__like">{this.props.like}</button>
      </div>
          );
        }
      }
      