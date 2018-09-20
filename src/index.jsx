import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Girl from './Girl';

import './index.styl';

const Hello = ({ username }) => (
  <h2 className="app__text">
Welcome,
    {' '}
    { username }
!
  </h2>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello username="friend" />
        <Girl username="Alise" />
      </div>
    );
  }
}

Hello.propTypes = {
  username: PropTypes.string,
};

Hello.defaultProps = {
  username: 'friend',
};

ReactDOM.render(<App />, document.querySelector('#app'));

export default hot(module)(App);
