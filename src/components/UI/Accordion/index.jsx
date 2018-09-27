import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.styl';

class Accordion extends React.Component {
  data = {
     clickRow: '.accordion__content',
     addition: '.accordion__content-addition',
  };

  constructor(props) {
     super(props);
     this.state = {
        isOpen: true,
     };
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
     this.setState({
        isOpen: !this.state.isOpen,
     });
  }

  render() {
     const activeClass = this.state.isOpen ? 'active' : '';

     return (
        <div className="accordion__block">
           <div className="accordion__content" onClick={this.handleClick}>{ this.props.text }</div>
           <div className={classNames(activeClass, 'accordion__addition')}>
              <span className="accordion__addition-text">{ this.props.additionText }</span>
           </div>
        </div>
     );
  }
}
Accordion.propTypes = {
   text: PropTypes.string,
   additionText: PropTypes.string,
};

Accordion.defaultProps = {
   text: 'Click',
   additionText: 'Addition',
};

export default Accordion;
