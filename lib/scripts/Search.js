import React, { Component } from 'react';


export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: ''
    }

    this.saveInput = this.saveInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  saveInput(e) {
    this.setState({input: e.target.value});
  }

  handleClick() {
    let splitSearch = this.state.input.split(', ');

    this.props.setLocation(splitSearch[0], splitSearch[1]);
  }

  render() {
    return (
      <div>
          <input type="text"
              placeholder="enter location"
              onChange={this.saveInput} />
          <button onClick={this.handleClick}>Search</button>
    </div>
    );
  }
}
