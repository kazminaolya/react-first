import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';


// import Girl from './components/UI/Girl';
import Button from './components/UI/Button';
import Icon from './components/UI/Icon';
import Accordion from './components/UI/Accordion';
import Modal from './components/UI/Modal';

import './index.styl';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Girl username="Alise" /> */}
        <Button>Button</Button>
        <Icon name="plane-departure" color="#487a9d" />
        <Accordion
          text="Click the row" additionText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Modal />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));

export default hot(module)(App);
