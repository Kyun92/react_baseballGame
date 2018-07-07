import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <h1>Filter</h1>
        {JSON.stringify(this.props.test)}
      </div>
    );
  }
}

export default Filter;
