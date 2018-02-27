import React, { Component } from 'react';
import '../css/Search-style.css';
import CompleteMe from '@wagasky/complete-me/lib/Trie.js';
import cityArray from './cityArray';
import propTypes from 'prop-types';

const trie = new CompleteMe();

trie.populate(cityArray.data);


export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      suggestions: []
    };

    this.saveInput = this.saveInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  saveInput(e) {
    this.setState({input: e.target.value});

    if (e.target.value.length > 2) {
      this.setState({suggestions: trie.suggest(e.target.value)});
    } else {
      this.setState({suggestions: []});
    }
  }

  handleClick() {
    let splitSearch = this.state.input.split(', ');

    this.props.setLocation(splitSearch[0], splitSearch[1]);
  }

  render() {
    return (
      <div className={this.props.srchDivCss}>
          <input type="text"
              className={this.props.searchCss}
              placeholder="enter location"
              onChange={this.saveInput}
              list="complete-me"/>
          <datalist id="complete-me">
          {
            this.state.suggestions.map(
              (suggestion, index) => <option value={suggestion} key= {index}/>)
          }
          </datalist>
          <button onClick={this.handleClick}
                  className={this.props.srchBtnCss}>Search</button>
    </div>
    );
  }
}

Search.propTypes = {
  setLocation: propTypes.func,
  srchDivCss: propTypes.string,
  searchCss: propTypes.string,
  srchBtnCss: propTypes.string
};
