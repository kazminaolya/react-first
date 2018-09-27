import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

import './styles.styl';

library.add(faSmile, faPlaneDeparture);

const Icon = ({ name, color }) => (<FontAwesomeIcon icon={name} color={color} />);

Icon.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  name: 'smile',
  color: '#000000',
};

export default Icon;
