import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isClicked: false};
    this.handler = this.handler.bind(this);
  }

  //handler goes here
  handler() {
    this.setState(prev => ({
      isClicked: !prev.isClicked
    }));
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.handler}>
          {this.state.isClicked ? 'Thanks!' : 'Click Me'}
        </button>
      </div>
    );
  }
}