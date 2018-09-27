import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.styl';

const Button = ({ children, className, ...props }) => {
  const cn = classNames('Button', className);
  return (<button className={cn} {...props} type="button">{children}</button>);
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
