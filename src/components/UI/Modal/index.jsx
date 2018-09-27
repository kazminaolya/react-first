import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import './styles.styl';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      isOpen: true,
    });
  }

  handleClickClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>
            Click to open modal
            popup
        </Button>
        {this.state.isOpen ? (
          <div className="modal__background">
            <div className="modal__dialog">
              <div className="modal__content">
                <div className="modal__header">
                  <h5 className="modal__title">{this.props.title}</h5>
                  <a onClick={this.handleClickClose} className="modal__btn-close">
                    <span>&times;</span>
                  </a>
                </div>
                <div className="modal__body">
                  <p className="modal__body-text">{this.props.text}</p>
                </div>
                <div className="modal__footer">
                  <Button className="modal__btn modal__btn-yes">{this.props.btnTextYes}</Button>
                  <Button className="modal__btn modal__btn-no">{this.props.btnTextNo}</Button>
                </div>
              </div>
            </div>
          </div>) : ''}
      </div>
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  btnTextYes: PropTypes.string,
  btnTextNo: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Hello',
  text: 'It is a modal',
  btnTextYes: 'Submit',
  btnTextNo: 'Cancel',
};

export default Modal;
