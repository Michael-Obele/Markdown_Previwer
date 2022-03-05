import React, { Component } from 'react';

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.setState = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Header</h1>
        <h1>Counter:{this.state.counter}</h1>
      </div>
    );
  }
}
