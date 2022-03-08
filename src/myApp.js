import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from './app/actionss'

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.Click = this.Click.bind(this);
  }
  Click() {
    this.setState((state) => ({
      counter: state.counter + 1,
    }))
  }
  render() {
    return (
      <div>
        <h1>Header</h1>
        <h2>Counter:{this.state.counter}</h2>
        <button onClick={this.Click}>Click to Add</button>
      </div>
    );
  }
}
