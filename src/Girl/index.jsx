import React from 'react';
import PropTypes from 'prop-types';
import './styles.styl';

const Girl = (props) => {
  return <div className="girl">
            <span className="girl__info">{props.username}</span>
            <div className="girl__image" />
         </div>;
};
Girl.propTypes = {
  username: PropTypes.string,
};
Girl.defaultProps = {
  username: 'Name',
};

export default Girl;
