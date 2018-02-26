import React from 'react';
import Search from './Search.js';
import '../css/Welcome-style.css';
import PropTypes from 'prop-types';

export default function Welcome(props) {
    return (
      <div className="welcome-page">
        <div className="center-box">
        <h1>Welcome to <span className="title">Weathrly</span></h1>
        <Search setLocation={props.setLocation} />
        </div>
      </div>
    );
}

Welcome.propTypes = {
  setLocation: PropTypes.func
};
