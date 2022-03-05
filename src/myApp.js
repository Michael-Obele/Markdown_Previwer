import React, { Component } from 'react';

export class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.Click = this.Click.bind(this);
  }
  Click() {
    setTimeout(
      this.setState((state) => ({
        counter: state.counter + 1,
      })),
      5000
    );
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

export const Slow = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('This will run after 1 second!');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <div>Slow</div>;
};
